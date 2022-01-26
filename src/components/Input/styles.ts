import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    font-size: 1.125rem;
    color: var(--text-title);
  }
  input {
    height: 3rem;
    border: 1px solid var(--text-title);
    border-radius: 2px;
    padding: 0.5rem;
  }
`;
