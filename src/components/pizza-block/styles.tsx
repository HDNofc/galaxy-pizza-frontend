import styled from 'styled-components/macro';
import Button from 'components/button';
import { StyledRadioGroup } from 'components/radio-group/styles';
import { StyledStuffedCrustSelect } from '../stuffed-crust-select/styles';

export const StyledPizzaBlock = styled.article`
  background-color: #fff;
  box-shadow: 0 2px 0 0 rgba(34, 60, 80, 0.1);
  max-width: 440px;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.fontColorTitle};
  font-family: ${(props) => props.theme.fonts.fontAdditional};
  font-size: 16px;
  line-height: 20px;
  margin: 0 0 8px;
  padding: 0;

  @media ${(props) => props.theme.media.tabletLandscape} {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.fontColorText};
  font-size: 14px;
  line-height: 18px;
  margin: 0 0 8px;
`;

export const Picture = styled.picture`
  display: flex;
`;

export const Image = styled.img`
  height: auto;
  width: 100%;
`;

export const Price = styled.span`
  font-family: ${(props) => props.theme.fonts.fontAdditional};
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  white-space: nowrap;
`;

export const AddToCart = styled(Button)`
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;

  @media ${(props) => props.theme.media.tabletLandscape} {
    font-size: 18px;
    line-height: 18px;
  }
`;

export const PizzaInfo = styled.div`
  padding: 10px;
  > ${StyledRadioGroup} {
    margin-bottom: 8px;
  }
`;

export const Type = styled.div`
  display: flex;
  > ${StyledStuffedCrustSelect} {
    margin-left: 8px;
  }
`;

export const ProductPurchase = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

export const Category = styled.div`
  display: flex;
  justify-content: right;

  > svg {
    &:not(:last-of-type) {
      margin-right: 8px;
    }
  }
`;
