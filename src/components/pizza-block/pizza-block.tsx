import RadioGroup, { IRadioItem } from 'components/radio-group';
import StuffedCrustSelect from 'components/stuffed-crust-select';

import { ReactComponent as Vegan } from './icons/vegan.svg';
import { ReactComponent as Hot } from './icons/hot.svg';
import {
  Description,
  Image,
  Title,
  StyledPizzaBlock,
  Type,
  Price,
  AddToCart,
  Picture,
  PizzaInfo,
  ProductPurchase,
  Category,
} from './styles';

export interface IPizzaImageUrl {
  jpg: string;
  webp: string;
}
interface IPizzaBlockProps {
  id: string;
  name: string;
  description: string;
  price: number | string;
  doughType: IRadioItem[];
  sizes: IRadioItem[];
  imageUrl: IPizzaImageUrl;
  stuffedCrusts: string[];
  selectedCrust: string;
  isStuffedCrustAvailable: boolean;
  onDoughTypeChange: (radioOption: {
    id: string;
    value: string | number;
    checked: boolean;
  }) => void;
  onSizeChange: (radioOption: { id: string; value: string | number; checked: boolean }) => void;
  onStuffedCrustChange: (selectedCrust: string) => void;
  onAddToCartClick: () => void;
  hot: boolean;
  vegan: boolean;
}

const PizzaBlock = (props: IPizzaBlockProps): React.ReactElement => {
  const {
    id,
    name,
    description,
    hot,
    vegan,
    doughType,
    price,
    sizes,
    imageUrl,
    stuffedCrusts,
    selectedCrust,
    isStuffedCrustAvailable,
    onDoughTypeChange,
    onSizeChange,
    onStuffedCrustChange,
    onAddToCartClick,
    ...otherProps
  } = props;

  return (
    <StyledPizzaBlock {...otherProps}>
      <Picture>
        <source type="image/webp" srcSet={`${imageUrl.webp}`} />
        <Image src={imageUrl.jpg} alt="" />
      </Picture>

      <PizzaInfo>
        <Category>
          {hot && <Hot />}
          {vegan && <Vegan />}
        </Category>

        <Title>{name}</Title>
        <Description>{description}</Description>

        <RadioGroup name={`dough-${id}`} items={doughType} onChange={onDoughTypeChange} />
        <Type>
          <RadioGroup name={`size-${id}`} items={sizes} onChange={onSizeChange} />
          {isStuffedCrustAvailable && ( // TODO сделать дефолтным значением 30см, т.к. появляется возможность выбора корочки
            <StuffedCrustSelect
              stuffedCrusts={stuffedCrusts}
              selectedStuffedCrust={selectedCrust}
              onChange={onStuffedCrustChange}
            />
          )}
        </Type>

        <ProductPurchase>
          <AddToCart text="В корзину" onClick={onAddToCartClick} standard />
          <Price>{`${price} ₽`}</Price>
        </ProductPurchase>
      </PizzaInfo>
    </StyledPizzaBlock>
  );
};

export default PizzaBlock;
