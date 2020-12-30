import Canvas from './Canvas'
import Donate from './cards/Donate'
import About from './cards/About'
import Footer from './layout/Footer'
import Header from './layout/Header'

const App = () => (
  <div className="App">
    <Header />
    <Canvas />
    <About />
    <Donate />
    <Footer />
  </div>
)

export default App
