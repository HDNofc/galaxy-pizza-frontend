import styled from 'styled-components/macro';

import { RadioGroup as StyledRadioGroup } from 'components/radio-group/radio-group.styles';
import { StuffedCrustSelect as StyledStuffedCrustSelect } from '../stuffed-crust-select/stuffed-crust-select.styles';

export const PizzaBlock = styled.article`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(34, 60, 80, 0.1);
`;

export const Title = styled.h2`
  margin: 0 0 6px;
  padding: 0;
  color: ${({ theme }) => theme.colorsMeaning.titleColor};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.fontAdditional};
  line-height: 24px;

  @media ${({ theme }) => theme.media.tabletLandscape} {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const Description = styled.p`
  margin: 0 0 16px;
  color: ${({ theme }) => theme.colorsMeaning.bodyColor};
  font-size: 14px;
  line-height: 20px;
`;

export const Picture = styled.picture`
  display: flex;
  min-height: 230px;
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
  font-family: ${({ theme }) => theme.fonts.fontAdditional};
  line-height: 18px;
  white-space: nowrap;
`;

export const PizzaInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 10px;

  @media ${({ theme }) => theme.media.tabletPortrait} {
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
