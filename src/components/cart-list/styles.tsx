import styled from 'styled-components/macro';

export const CartList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const CartListItem = styled.li`
  padding: 16px 0;
  list-style: none;
  border-bottom: 1px solid #ededed;
`;

export const ItemBody = styled.div`
  display: flex;
  align-items: flex-start;

  > picture {
    margin: 6px 4px 0 0;
  }
`;

export const CartListImage = styled.img`
  width: 50px;
`;

export const ItemInfo = styled.div`
  margin-right: 4px;
`;

export const ItemName = styled.span`
  display: inline-block;
  margin-bottom: 4px;
  color: ${(props) => props.theme.colors.fontColorTitle};
  font-weight: 700;
  font-size: 12px;
  font-family: ${(props) => props.theme.fonts.fontAdditional};
  line-height: 12px;
`;

export const ItemShortDescription = styled.p`
  margin: 0;
  color: ${(props) => props.theme.colors.fontColorText};
  font-size: 12px;
  line-height: 16px;
`;

export const DeleteButton = styled.button`
  flex-shrink: 0;
  width: 10px;
  height: 10px;
  margin: 8px 0 0 auto;
  padding: 0;
  color: #bfb7b6;
  cursor: pointer;
  transition: color 0.35s;

  &:hover {
    color: #c21313;
  }
`;

export const ItemSummaryPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 14px;
`;

export const ItemPrice = styled.span`
  color: ${(props) => props.theme.colors.fontColorTitle};
  font-weight: 500;
  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.fontAdditional};
  line-height: 14px;
`;
