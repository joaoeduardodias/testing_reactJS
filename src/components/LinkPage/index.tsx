import Link from 'next/link';
import { Container } from './styles';

interface LinkPageProps {
  href: string;
  title: string;
  color: string;
}

export function LinkPage({ color, href, title }: LinkPageProps): JSX.Element {
  return (
    <Container color={color}>
      <Link href={href}>
        <a>{title}</a>
      </Link>
    </Container>
  );
}
