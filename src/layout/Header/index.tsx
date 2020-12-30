import styles from './styles.module.scss'

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.headerTitle}>
      <a href="/" className={styles.headerTitleLink}>
        Shattered Profile
      </a>
    </h1>
  </header>
)

export default Header
