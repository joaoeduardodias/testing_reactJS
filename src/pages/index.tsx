/* eslint-disable no-console */
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { MdModeEdit, MdDeleteOutline } from 'react-icons/md';
import axios from 'axios';
import Swal from 'sweetalert2';
import { CreateIndexerModal } from '../components/CreateIndexerModal';
import { EditIndexerModal } from '../components/EditIndexerModal';
import { Header } from '../components/Header';
import { Container, Content, ActionsIndexer } from '../styles/styles';
import { NavigationPages } from '../components/NavigationPages';
import { FilterList } from '../components/FilterList';
import { InputSearch } from '../components/InputSearch';

interface Indexer {
  simbolo: string;
  nome: string;
  id: number;
}

Modal.setAppElement('#__next');
const Home: NextPage = function () {
  const [isOpenNewIndexerModal, setIsOpenNewIndexerModal] =
    useState<boolean>(false);
  const [isOpenEditIndexerModal, setIsOpenEditIndexerModal] =
    useState<boolean>(false);
  const [EditIndexer, setEditIndexer] = useState<Indexer>();
  const [indexers, setIndexers] = useState<Indexer[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [listOrderByDescending, setListOrderByDescending] =
    useState<boolean>(false);
  const [searchName, setSearchName] = useState<string>();
  const [searchSymbol, setSearchSymbol] = useState<string>();

  useEffect(() => {
    async function fetchApi(): Promise<void> {
      let response;

      if (searchName && searchName !== ' ') {
        response = await axios.get(
          `https://oliveira-rondelli-api.herokuapp.com/api/planogestor/indexadores?nome=${searchName}`
        );
      } else if (searchSymbol && searchSymbol !== ' ') {
        response = await axios.get(
          `https://oliveira-rondelli-api.herokuapp.com/api/planogestor/indexadores?simbolo=${searchSymbol}`
        );
      } else {
        response = await axios.get(
          `https://oliveira-rondelli-api.herokuapp.com/api/planogestor/indexadores?orderByDescending=${listOrderByDescending}&page=${currentPage}&size=10`
        );
      }

      setTotalItems(Number(response.headers['x-total-count']));
      setIndexers(response.data.data);
    }
    fetchApi();
  }, [currentPage, listOrderByDescending, searchName, searchSymbol]);

  function handleOpenModal(modal: string, indexer?: Indexer): void {
    switch (modal) {
      case 'newIndexer':
        setIsOpenNewIndexerModal(true);
        break;
      case 'editIndexer':
        setIsOpenEditIndexerModal(true);
        setEditIndexer(indexer);

        break;
      default:
        break;
    }
  }

  function handleCloseModal(modal: string): void {
    switch (modal) {
      case 'newIndexer':
        setIsOpenNewIndexerModal(false);
        break;
      case 'editIndexer':
        setIsOpenEditIndexerModal(false);
        break;
      default:
        break;
    }
  }

  async function handleDeleteIndexer(id: number): Promise<void> {
    const responseSwal = await Swal.fire({
      title: 'Excluir Indexador',
      text: 'Deseja realmente excluir esse indexador ?',
      icon: 'warning',
      confirmButtonText: 'Sim',
      confirmButtonColor: '#0534F0',
      showCancelButton: true,
      cancelButtonText: 'Não',
      cancelButtonColor: '#e52e4d',
    });

    if (responseSwal.isConfirmed === true) {
      axios
        .delete(
          `https://oliveira-rondelli-api.herokuapp.com/api/planogestor/indexadores/${id}`
        )
        .catch(function (error) {
          if (error.response) {
            switch (error.response.status) {
              case 404:
                Swal.fire({
                  title: error.response.data.errors.errorMessage,
                  text: 'Por favor, tente novamente mais tarde, ou contate o suporte.',
                  icon: 'error',
                  confirmButtonText: 'Ok',
                  confirmButtonColor: '#0534F0',
                });
                break;

              default:
                Swal.fire({
                  title: error.response.data.errors.errorMessage,
                  text: 'Por favor, tente novamente mais tarde, ou contate o suporte.',
                  icon: 'error',
                  confirmButtonText: 'Ok',
                  confirmButtonColor: '#0534F0',
                });
            }
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
          console.log(error.config);
        })
        .then(() => {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: toast => {
              toast.addEventListener('mouseenter', Swal.stopTimer);
              toast.addEventListener('mouseleave', Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: 'success',
            iconColor: '#e52e4d',
            title: 'Indexador excluído com sucesso!',
          });
        });
    }
  }

  return (
    <>
      <Header title="Oliveira e Rondelli" openNewIndexModal={handleOpenModal} />
      <CreateIndexerModal
        isOpen={isOpenNewIndexerModal}
        onRequestClose={handleCloseModal}
        loadData={() => console.log('testes')}
      />

      {isOpenEditIndexerModal && (
        <EditIndexerModal
          isOpen={isOpenEditIndexerModal}
          onRequestClose={handleCloseModal}
          indexer={EditIndexer as Indexer}
          loadData={() => console.log('testes')}
        />
      )}
      <Container>
        <InputSearch
          onSetSearchName={setSearchName}
          onSetSearchSymbol={setSearchSymbol}
          loadData={() => console.log('testes')}
        />
        <FilterList orderByDescending={setListOrderByDescending} />
        <Content>
          <li className="hero">
            <div>Nome</div>
            <div>Símbolo</div>
            <section />
          </li>
          {indexers.map(item => (
            <li key={item.id}>
              <div>{item.nome}</div>
              <div>{item.simbolo}</div>
              <ActionsIndexer>
                <button
                  type="button"
                  onClick={() => handleOpenModal('editIndexer', item)}
                >
                  <MdModeEdit />
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteIndexer(item.id)}
                >
                  <MdDeleteOutline />
                </button>
              </ActionsIndexer>
            </li>
          ))}
        </Content>
        <NavigationPages
          totalItems={totalItems}
          onSetCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </Container>
    </>
  );
};

export default Home;
