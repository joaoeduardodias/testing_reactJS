import styled from 'styled-components';

export const Container = styled.header`
  height: 6rem;
  padding: 0 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--gray);
  color: var(--shape);
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  svg {
    margin-right: 2rem;
    cursor: pointer;
  }
  strong {
    font-size: 1.3rem;
  }
  button {
    background: var(--blue);
    color: var(--shape);
    font-size: 1.125rem;
    font-weight: 600;
    padding: 0.5rem 1rem;
    border-radius: 4px;
  }
  @media (max-width: 768px) {
    padding: 0 3rem;
  }
  @media (max-width: 425px) {
    padding: 0 1.5rem;
  }
`;
