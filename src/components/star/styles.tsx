import styled from 'styled-components/macro';

export const Star = styled.div`
  display: inline-flex;
  width: 15px;

  &:not(:last-child) {
    margin-right: 4px;
  }
`;
