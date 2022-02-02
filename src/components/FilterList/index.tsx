import { Container } from './styles';

interface FilterListProps {
  orderByDescending: (value: boolean) => void;
}

export function FilterList({
  orderByDescending,
}: FilterListProps): JSX.Element {
  function handleSelectOrderBy(e: any): void {
    if (e.target.value === 'true') {
      orderByDescending(true);
    } else {
      orderByDescending(false);
    }
  }

  return (
    <Container>
      <span>Ordenar por:</span>
      <select
        name="orderingBy"
        id="orderingBy"
        onChange={handleSelectOrderBy}
        defaultValue="false"
      >
        <option value="true">Ordem Decrescente</option>
        <option value="false">Ordem Crescente</option>
      </select>
    </Container>
  );
}
