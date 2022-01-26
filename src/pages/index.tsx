import type { NextPage } from 'next';
import { useState } from 'react';
import Modal from 'react-modal';
import { CreateIndexerModal } from '../components/CreateIndexerModal';
import { Header } from '../components/Header';
import { Container, Content } from './styles';

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
          <ul>
            <li>item 1</li>
          </ul>
        </Content>
      </Container>
    </>
  );
};

export default Home;
