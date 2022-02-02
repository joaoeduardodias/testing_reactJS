import { useState } from 'react';
import { Container } from './styles';

interface InputSearchProps {
  onSetSearchName: (name: string) => void;
  onSetSearchSymbol: (symbol: string) => void;
  loadData: () => void;
}

export function InputSearch({
  onSetSearchName,
  onSetSearchSymbol,
  loadData,
}: InputSearchProps): JSX.Element {
  const [nameInputText, setNameInputText] = useState<string>('');
  const [symbolInputText, setSymbolInputText] = useState<string>('');

  function handleSearchName(nameValue: string): void {
    onSetSearchName(nameValue);
    loadData();
  }
  function handleSearchSymbol(symbolValue: string): void {
    onSetSearchSymbol(symbolValue);
    loadData();
  }

  return (
    <Container>
      <input
        type="text"
        name="search"
        placeholder="Pesquisar por nome"
        onChange={e => setNameInputText(e.target.value)}
        onKeyDown={e => {
          if (e.code === 'Enter') {
            handleSearchName(nameInputText);
          }
        }}
        onBlur={() => {
          handleSearchName(' ');
        }}
        value={nameInputText}
      />
      <input
        type="text"
        name="search"
        placeholder="Pesquisar por simbolo"
        onChange={e => setSymbolInputText(e.target.value)}
        onKeyDown={e => {
          if (e.code === 'Enter') {
            handleSearchSymbol(symbolInputText.toUpperCase());
          }
        }}
        onBlur={() => {
          handleSearchSymbol(' ');
        }}
        value={symbolInputText}
      />
    </Container>
  );
}
