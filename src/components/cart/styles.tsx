import styled from 'styled-components/macro';

export const Cart = styled.aside`
  display: none;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 272px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(34, 60, 80, 0.1);

  @media ${(props) => props.theme.media.tabletPortrait} {
    display: flex;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.fontAdditional};
  line-height: 18px;
  text-align: center;
`;

export const CartTotalCount = styled.span`
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

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 14px;
`;

export const TotalPriceText = styled.span`
  color: ${(props) => props.theme.colors.fontColorTitle};
  font-weight: 500;
  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.fontAdditional};
  line-height: 14px;
`;

export const TotalPrice = styled.span`
  color: ${(props) => props.theme.colors.fontColorTitle};
  font-weight: 500;
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.fontAdditional};
  line-height: 18px;
`;

export const Description = styled.p`
  margin: 0;
  color: ${(props) => props.theme.colors.fontColorText};
  font-size: 14px;
  line-height: 18px;
  text-align: center;
`;
