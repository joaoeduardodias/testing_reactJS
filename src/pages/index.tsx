import type { NextPage } from 'next';
import { Header } from '../components/Header';
import { Container, Content } from './styles';

const Home: NextPage = function () {
  return (
    <>
      <Header title="Oliveira e Rondelli" />
      <Container>
        <Content>sasa</Content>
      </Container>
    </>
  );
};

export default Home;
