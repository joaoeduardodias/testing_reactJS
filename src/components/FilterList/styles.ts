import styled from 'styled-components';

export const Container = styled.section`
  height: 3rem;
  width: 100%;
  max-width: 1120px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--blue-light);
  span {
    margin: 0 1rem;
    color: var(--text-title);
  }
  select {
    padding: 0 0.3rem;
    height: 2rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;
  }
`;
