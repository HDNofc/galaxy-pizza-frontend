import styled from 'styled-components/macro';

export const StyledCartList = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const CartListItem = styled.li`
  border-bottom: 1px solid #ededed;
  list-style: none;
  padding: 16px 0;
`;

export const ItemBody = styled.div`
  align-items: flex-start;
  display: flex;

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
  color: ${(props) => props.theme.colors.fontColorTitle};
  display: inline-block;
  font-family: ${(props) => props.theme.fonts.fontAdditional};
  font-size: 12px;
  font-weight: 700;
  line-height: 12px;
  margin-bottom: 4px;
`;

export const ItemShortDescription = styled.p`
  color: ${(props) => props.theme.colors.fontColorText};
  font-size: 12px;
  line-height: 16px;
  margin: 0;
`;

export const DeleteButton = styled.button`
  color: #bfb7b6;
  cursor: pointer;
  flex-shrink: 0;
  height: 10px;
  margin: 8px 0 0 auto;
  padding: 0;
  transition: color 0.35s;
  width: 10px;

  &:hover {
    color: #c21313;
  }
`;

export const ItemSummaryPrice = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  width: 100%;
`;

export const ItemPrice = styled.span`
  color: ${(props) => props.theme.colors.fontColorTitle};
  font-family: ${(props) => props.theme.fonts.fontAdditional};
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
`;
