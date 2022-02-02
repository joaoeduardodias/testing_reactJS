import styled from 'styled-components';

export const Container = styled.div`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  > div {
    margin-bottom: 1rem;
  }
  button[type='submit'] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--orange);
    color: #fff;

    border-radius: 0.25rem;
    border: 0;
    font-size: 1.4rem;
    font-weight: 600;
    margin-top: 1.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
