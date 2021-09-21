import styled from 'styled-components/macro';
import Button from 'components/button';
import { StyledRadioGroup } from 'components/radio-group/styles';
import { StyledStuffedCrustSelect } from '../stuffed-crust-select/styles';

export const StyledPizzaBlock = styled.article`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(34, 60, 80, 0.1);
`;

export const Title = styled.h2`
  margin: 0 0 8px;
  padding: 0;
  color: ${(props) => props.theme.colors.fontColorTitle};
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.fontAdditional};
  line-height: 20px;

  @media ${(props) => props.theme.media.tabletLandscape} {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const Description = styled.p`
  margin: 0 0 8px;
  color: ${(props) => props.theme.colors.fontColorText};
  font-size: 14px;
  line-height: 18px;
`;

export const Picture = styled.picture`
  display: flex;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Price = styled.span`
  font-weight: 500;
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.fontAdditional};
  line-height: 18px;
  white-space: nowrap;
`;

export const AddToCart = styled(Button)`
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;

  @media ${(props) => props.theme.media.tabletLandscape} {
    font-size: 18px;
    line-height: 18px;
  }
`;

export const PizzaInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 10px;

  @media ${(props) => props.theme.media.tabletPortrait} {
    padding: 10px 20px 24px;
  }

  > ${StyledRadioGroup} {
    margin-top: auto;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
`;

export const Category = styled.div`
  display: flex;
  justify-content: right;
  height: 16px;

  > svg {
    &:not(:last-of-type) {
      margin-right: 8px;
    }
  }
`;
