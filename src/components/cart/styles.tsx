import styled from 'styled-components/macro';

export const StyledCart = styled.aside`
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 272px;
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CartTitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.fontAdditional};
  font-size: 18px;
  line-height: 18px;
  text-align: center;
`;

export const CartTitleTotalCount = styled.span`
  color: #a69895;
  font-size: 18px;
  font-style: normal;
  line-height: 18px;
`;

export const ClearCartButton = styled.button`
  font-size: 12px;
  line-height: 12px;
`;

export const CartImage = styled.img`
  margin: 12px 0 8px;
`;

export const CartFooter = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  width: 100%;
`;

export const TotalPriceText = styled.span`
  color: ${(props) => props.theme.colors.fontColorTitle};
  font-family: ${(props) => props.theme.fonts.fontAdditional};
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
`;

export const TotalPrice = styled.span`
  color: ${(props) => props.theme.colors.fontColorTitle};
  font-family: ${(props) => props.theme.fonts.fontAdditional};
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.fontColorText};
  font-size: 14px;
  line-height: 18px;
  margin: 0;
  text-align: center;
`;
