/* eslint-disable jsx-a11y/label-has-associated-control */
import type { NextPage } from 'next';
import { Header } from '../components/Header';
import { Input } from '../components/Input';

const Home: NextPage = function () {
  return (
    <>
      <Header title="Cadastro de Indexadores" />
      <main>
        <div>
          <form action="">
            <Input id="simbolo" label="Simbolo" />
          </form>
        </div>
      </main>
    </>
  );
};

export default Home;
