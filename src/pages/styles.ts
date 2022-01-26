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
`;

export const ContentButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
