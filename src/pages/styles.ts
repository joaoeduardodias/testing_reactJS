import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 90%;
  max-width: 1120px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 2rem;
  margin-top: 2rem;
`;
