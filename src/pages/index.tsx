import type { NextPage } from 'next';
import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Container, Content, ContentButton } from './styles';

const Home: NextPage = function () {
  return (
    <>
      <Header title="Cadastro de Indexadores" />
      <Container>
        <Content>
          <form action="">
            <Input id="symbol" label="Simbolo" />
            <Input id="name" label="Nome" />
            <ContentButton>
              <button type="submit">Cadastrar</button>
            </ContentButton>
          </form>
        </Content>
      </Container>
    </>
  );
};

export default Home;
