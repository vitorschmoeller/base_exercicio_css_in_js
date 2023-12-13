import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import EstiloGlobal from './styles'
import { ThemeProvider } from 'styled-components'
import tema from './theme/tema'
// import './global.css'

function App() {
  return (
    <ThemeProvider theme={tema}>
      <EstiloGlobal></EstiloGlobal>
      <Header />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </ThemeProvider>
  )
}

export default App
