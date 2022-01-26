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
  @media (max-width: 768px) {
    padding: 0 3rem;
  }
  @media (max-width: 425px) {
    padding: 0 1.5rem;
  }
`;
