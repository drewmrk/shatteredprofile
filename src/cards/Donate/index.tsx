import Card from '../../components/Card'
import styles from './styles.module.scss'

const Donate = () => (
  <Card title="Donate" info="Buy me a coffee!">
    <a href="https://www.paypal.com/paypalme/drewmarkel" className={styles.link}>PayPal</a>
  </Card>
)

export default Donate
