import styled from 'styled-components';

export const Container = styled.header`
  height: 6rem;
  padding: 0 10rem;
  display: flex;
  align-items: center;
  background: var(--gray);
  color: var(--shape);
  svg {
    margin-right: 2rem;
    cursor: pointer;
  }
  strong {
    font-size: 1.3rem;
  }
`;
