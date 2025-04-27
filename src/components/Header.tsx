import Link from 'next/link';
import styles from '../styles/Header.module.css';

export const Header = () => (
  <header className={styles.header}>
    <Link href="/">
      <h1>Conectar Inmobiliaria</h1>
    </Link>
    <nav>
      <Link href="/about">Nosotros</Link>
      <Link href="/contact">Contacto</Link>
    </nav>
  </header>
);
