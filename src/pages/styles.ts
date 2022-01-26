import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background: var(--shape);
  padding: 3rem;
  width: 45rem;
  margin-top: 10rem;
  box-shadow: 0 4px 8px 6px var(--shadow);
  border: 1px solid var(--text-body);
  border-radius: 4px;

  div + div {
    margin-top: 2rem;
  }
  button {
    padding: 0.8rem 1.5rem;
    border-radius: 4px;
    background: var(--green);
    color: var(--shape);
    font-weight: 600;
    margin: 0 auto;
  }
  @media (max-width: 425px) {
    width: 28rem;
    padding: 1.5rem;
  }
  @media (max-width: 375px) {
    width: 25rem;
  }
  @media (max-width: 325px) {
    width: 21rem;
  }
`;

export const ContentButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
