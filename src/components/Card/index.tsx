import styles from './styles.module.scss'

const Card = (props: { children?: React.ReactNode; title: string; info: string }) => (
  <div className={styles.card}>
    <h1 className={styles.cardTitle}>{props.title}</h1>
    <p className={styles.cardInfo}>{props.info}</p>
    {props.children}
  </div>
)

export default Card
