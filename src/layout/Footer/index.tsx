import styles from './styles.module.scss'

const Footer = () => (
  <footer className={styles.footer}>
    <small className={styles.footerCopyright}>&copy; {new Date().getFullYear()} Drew Markel</small>
  </footer>
)

export default Footer
