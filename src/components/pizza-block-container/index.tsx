import PizzaBlock from 'components/pizza-block';

import { IPizza, IPizzaCrustTypes, IPizzaDoughTypes } from 'redux/store/types';
import { useEffect, useRef, useState } from 'react';
import { IRadioItem } from 'components/radio-group';
import { IPizzaImageUrl } from 'components/pizza-block';

import { uniqueId } from 'lodash';

const PIZZA_DOUGH_NAMES = ['Традиционное', 'Тонкое'];

interface PizzaBlockContainerProps {
  mix?: string | string[];
  pizzaItem: IPizza;
}

type IFormattedPizzaDough = {
  [key in IPizzaCrustTypes]: {
    sizes: IRadioItem[];
    price: number[];
  };
};

type IFormattedPizzaTypes = {
  [key in IPizzaDoughTypes]: IFormattedPizzaDough;
};

const PizzaBlockContainer = (props: PizzaBlockContainerProps): React.ReactElement => {
  const { pizzaItem } = props;

  const pizzaTypesWithRadioId = useRef<IFormattedPizzaTypes>({} as IFormattedPizzaTypes);

  const [currentDoughValue, setCurrentDoughValue] = useState<IPizzaDoughTypes>(
    '' as IPizzaDoughTypes
  );
  const [currentStuffedCrust, setCurrentStuffedCrust] = useState<IPizzaCrustTypes>(
    '' as IPizzaCrustTypes
  );
  const [currentSize, setCurrentSize] = useState<number>(0);
  const [currentPrice, setCurrentPrice] = useState<number>(0);
  const [currentImage, setCurrentImage] = useState<IPizzaImageUrl>({} as IPizzaImageUrl);

  const [doughTypes, setDoughTypes] = useState<IRadioItem[]>([]);
  const [sizes, setSizes] = useState<IRadioItem[]>([]);
  const [isStuffedCrustAvailable, setIsStuffedCrustAvailable] = useState<boolean>(false);
  const [stuffedCrusts, setStuffedCrusts] = useState<string[]>([]);

  useEffect(() => {
    setPizzaTypesWithRadioId(pizzaItem);
    setInitialPizzaBlockData(pizzaTypesWithRadioId.current);
    setInitialImage(pizzaItem);
  }, []);

  useEffect(() => {
    updateAllPizzaData();
  }, [currentDoughValue, currentSize, currentStuffedCrust]);

  const setPizzaTypesWithRadioId = (pizzaData: IPizza) => {
    const pizzaDataWithRadioId: any = {}; // TODO Типизировать

    for (const type in pizzaData.types) {
      const objectType = pizzaData.types[type as IPizzaDoughTypes];
      pizzaDataWithRadioId[type as keyof IFormattedPizzaTypes] = {} as IPizzaCrustTypes;

      for (const crust in objectType) {
        pizzaDataWithRadioId[type][crust] = {};

        pizzaDataWithRadioId[type as IPizzaDoughTypes][crust as IPizzaCrustTypes].sizes =
          getRadioFormatItems({
            items: objectType[crust as IPizzaCrustTypes].sizes,
            prefix: 'size-',
          });

        pizzaDataWithRadioId[type][crust].price = objectType[crust as IPizzaCrustTypes].price;
      }
    }

    pizzaTypesWithRadioId.current = pizzaDataWithRadioId;
  };

  const setInitialPizzaBlockData = (pizzaTypesWithRadio: IFormattedPizzaTypes) => {
    if (!pizzaTypesWithRadio) {
      return;
    }

    const doughTypes = Object.keys(pizzaTypesWithRadio);
    const currentDoughType = doughTypes[0] as IPizzaDoughTypes;
    setDoughTypes(
      getRadioFormatItems({ items: doughTypes, prefix: 'dough-', label: PIZZA_DOUGH_NAMES })
    );
    setCurrentDoughValue(currentDoughType);

    const stuffedCrust = getStuffedCrust(pizzaTypesWithRadio, currentDoughType);
    setStuffedCrusts(stuffedCrust);
    setCurrentStuffedCrust('none');

    if (stuffedCrust.length === 1 && stuffedCrust[0] === 'none') {
      setIsStuffedCrustAvailable(false);
    } else {
      setIsStuffedCrustAvailable(true);
    }

    const currentPizza = pizzaTypesWithRadio[currentDoughType];
    setSizes(currentPizza.none.sizes);
    setCurrentSize(currentPizza.none.sizes[0].value as number);

    setCurrentPrice(currentPizza.none.price[0]);
  };

  const setInitialImage = (pizzaData: IPizza) => {
    const doughTypes = Object.keys(pizzaData.types);
    const currentDoughType = doughTypes[0] as IPizzaDoughTypes;

    const currentImg = pizzaData.imageUrl[currentDoughType]?.full;
    if (currentImg) {
      setCurrentImage(currentImg);
    }
  };

  const updateAllPizzaData = () => {
    if (!currentDoughValue) {
      return;
    }

    updateDoughTypes();
    updateImage();
    updateStuffedCrust();
    updateSizes();
    updatePrice();
  };

  const getStuffedCrust = (pizzaTypes: IFormattedPizzaTypes, doughValue: IPizzaDoughTypes) =>
    Object.keys(pizzaTypes[doughValue]);

  /* События */
  const onDoughTypeChange = ({ value }: { value: string | number }) => {
    setCurrentDoughValue(value as IPizzaDoughTypes);
  };

  const onStuffedCrustChange = (selectedCrust: string) => {
    setCurrentStuffedCrust(selectedCrust as IPizzaCrustTypes);
  };

  const onSizeChange = ({ value }: { value: number | string }) => {
    setCurrentSize(value as number);
  };

  const updateDoughTypes = () => {
    const updatedArray = updateRadioFields(doughTypes, currentDoughValue);
    setDoughTypes(updatedArray);
  };

  const updateImage = () => {
    const newImage = pizzaItem.imageUrl[currentDoughValue]?.full;
    if (newImage) {
      setCurrentImage(newImage);
    }
  };

  const updateStuffedCrust = () => {
    const currentDoughStuffedCrust = Object.entries(
      pizzaTypesWithRadioId.current[currentDoughValue]
    );

    const stuffedCrust = ['none'];

    currentDoughStuffedCrust.forEach((pizzaCrustItem) => {
      pizzaCrustItem[1].sizes.forEach((size) => {
        if (size.value === currentSize && !stuffedCrust.includes(pizzaCrustItem[0])) {
          stuffedCrust.push(pizzaCrustItem[0]);
        }
      });
    });

    if (stuffedCrust.length === 1 && stuffedCrust[0] === 'none') {
      setIsStuffedCrustAvailable(false);
      setCurrentStuffedCrust('none');
    } else {
      setIsStuffedCrustAvailable(true);
    }

    setStuffedCrusts(stuffedCrust);
  };

  const updateSizes = () => {
    const newSizesArrayValues = Object.values(pizzaTypesWithRadioId.current[currentDoughValue]);

    if (!newSizesArrayValues) {
      return;
    }

    const allPossiblePizzaSizes: IRadioItem[] = [];

    newSizesArrayValues.forEach((value) => {
      value.sizes.forEach((size) => {
        allPossiblePizzaSizes.push(size);
      });
    });

    const allSizesWithoutDuplicates = allPossiblePizzaSizes.filter(
      (elem, index, self) => index === self.findIndex((t) => t.value === elem.value)
    );

    const getUpdatedSizes = () => {
      const newSizesArray =
        pizzaTypesWithRadioId.current[currentDoughValue][currentStuffedCrust]?.sizes ??
        pizzaTypesWithRadioId.current[currentDoughValue].none.sizes;

      let isCurrentSizeInNewArray = false;

      newSizesArray.forEach((size) => {
        if (size.value === currentSize) {
          isCurrentSizeInNewArray = true;
        }
      });

      if (isCurrentSizeInNewArray) {
        return updateRadioFields(allSizesWithoutDuplicates, currentSize);
      }

      return updateRadioFields(allSizesWithoutDuplicates, newSizesArray[0].value);
    };

    const updatedArray = getUpdatedSizes();

    setSizes(updatedArray);
  };

  const updatePrice = () => {
    const currentPizza = pizzaTypesWithRadioId.current[currentDoughValue][currentStuffedCrust];
    if (!currentPizza) {
      return;
    }

    let currentSizeIndex: number = 0;
    currentPizza.sizes.forEach((size, index) => {
      if (size.value === currentSize) {
        currentSizeIndex = index;
      }
      return;
    });

    setCurrentPrice(currentPizza.price[currentSizeIndex]);
  };

  const { _id, name, description, hot, vegan } = pizzaItem;

  return (
    <PizzaBlock
      id={_id}
      name={name}
      description={description}
      imageUrl={currentImage}
      doughType={doughTypes}
      stuffedCrusts={stuffedCrusts}
      price={currentPrice}
      selectedCrust={currentStuffedCrust}
      sizes={sizes}
      hot={hot}
      vegan={vegan}
      onDoughTypeChange={onDoughTypeChange}
      onSizeChange={onSizeChange}
      onStuffedCrustChange={onStuffedCrustChange}
      isStuffedCrustAvailable={isStuffedCrustAvailable}
    />
  );
};

function updateRadioFields(
  radioItems: IRadioItem[],
  selectedItemId: string | number
): IRadioItem[] {
  return radioItems.map((item) => ({
    ...item,
    checked: item.value === selectedItemId,
  }));
}

function getRadioFormatItems({
  items,
  prefix,
  label,
}: {
  items: number[] | string[];
  prefix: string;
  label?: string[] | number[];
}): IRadioItem[] {
  return items.map((item, index) => ({
    id: uniqueId(prefix),
    value: item,
    label: (label && label[index]) ?? item,
    checked: index === 0 ? true : false,
  }));
}

export default PizzaBlockContainer;
