import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.ul`
  list-style: none;
  width: 90%;
  max-width: 1120px;
  height: 40rem;
  margin-top: 5rem;
  .hero {
    height: 2rem;
    border: 1px solid #d7d7d7;
    div {
      padding: 0;
    }
    section {
      padding: 0 3.88rem;
    }
  }

  li {
    display: flex;
    background: #e7e9ee;
    height: 3.5rem;

    color: var(--text-title);
    & + li {
      border-bottom: 1px solid #d7d7d7;
    }
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.2rem;
    height: 100%;

    width: 100%;
    height: 100%;
    & + div {
      border-left: 1px solid #d7d7d7;
    }
  }
`;

export const ActionsIndexer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15rem;
  margin-right: 1rem;
  button {
    width: 100%;
    height: 80%;
    color: var(--orange);
    border: 1px solid var(--orange);
    border-radius: 2px;

    & + button {
      margin-left: 0.5rem;
      color: var(--red);
      border: 1px solid var(--red);
    }
  }
`;
