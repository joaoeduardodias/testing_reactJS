import type { NextPage } from 'next';
import { useState } from 'react';
import Modal from 'react-modal';
import { MdModeEdit, MdDeleteOutline } from 'react-icons/md';
import { CreateIndexerModal } from '../components/CreateIndexerModal';
import { Header } from '../components/Header';
import { Container, Content, ActionsIndexer } from './styles';

Modal.setAppElement('#__next');
const Home: NextPage = function () {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  function handleOpenModal(): void {
    setIsOpenModal(true);
  }

  function handleCloseModal(): void {
    setIsOpenModal(false);
  }

  return (
    <>
      <Header title="Oliveira e Rondelli" openNewIndexModal={handleOpenModal} />
      <CreateIndexerModal
        isOpen={isOpenModal}
        onRequestClose={handleCloseModal}
      />
      <Container>
        <Content>
          <li className="hero">
            <div>Nome</div>
            <div>Símbolo</div>
            <section />
          </li>

          <li>
            <div>Mato Grosso do sul</div>
            <div>UF</div>
            <ActionsIndexer>
              <button type="button">
                <MdModeEdit />
              </button>
              <button type="button">
                <MdDeleteOutline />
              </button>
            </ActionsIndexer>
          </li>
          <li>
            <div>São Paulo</div>
            <div>SP</div>
            <ActionsIndexer>
              <button type="button">
                <MdModeEdit />
              </button>
              <button type="button">
                <MdDeleteOutline />
              </button>
            </ActionsIndexer>
          </li>
          <li>
            <div>São Paulo</div>
            <div>SP</div>
            <ActionsIndexer>
              <button type="button">
                <MdModeEdit />
              </button>
              <button type="button">
                <MdDeleteOutline />
              </button>
            </ActionsIndexer>
          </li>
        </Content>
      </Container>
    </>
  );
};

export default Home;
