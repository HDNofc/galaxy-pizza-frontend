import RadioGroup, { IRadioItem } from 'components/radio-group';
import StuffedCrustSelect from 'components/stuffed-crust-select';
import Button from 'components/button';

import { ReactComponent as Vegan } from './icons/vegan.svg';
import { ReactComponent as Hot } from './icons/hot.svg';
import * as S from './pizza-block.styles';

export interface IPizzaImageUrl {
  jpg: string;
  webp: string;
}
interface Props {
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

const PizzaBlock = (props: Props): React.ReactElement => {
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
    <S.PizzaBlock {...otherProps}>
      <S.Picture>
        <source type="image/webp" srcSet={`${imageUrl.webp}`} />
        <S.Image src={imageUrl.jpg} alt="" />
      </S.Picture>

      <S.PizzaInfo>
        <S.Category>
          {hot && <Hot />}
          {vegan && <Vegan />}
        </S.Category>

        <S.Title>{name}</S.Title>
        <S.Description>{description}</S.Description>

        <RadioGroup name={`dough-${id}`} items={doughType} onChange={onDoughTypeChange} />
        <S.Type>
          <RadioGroup name={`size-${id}`} items={sizes} onChange={onSizeChange} />
          {isStuffedCrustAvailable && ( // TODO сделать дефолтным значением 30см, т.к. появляется возможность выбора корочки
            <StuffedCrustSelect
              stuffedCrusts={stuffedCrusts}
              selectedStuffedCrust={selectedCrust}
              onChange={onStuffedCrustChange}
            />
          )}
        </S.Type>

        <S.ProductPurchase>
          <Button text="В корзину" onClick={onAddToCartClick} standard large />
          <S.Price>{`${price} ₽`}</S.Price>
        </S.ProductPurchase>
      </S.PizzaInfo>
    </S.PizzaBlock>
  );
};

export default PizzaBlock;
