import Navbar from './components/navbar/Navbar'
import Main from './pages/homepage/Main'
import Footer from './components/footer/Footer'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
      <Route exact path='/' component={Main} />
      {/* <Main /> */}
      <Footer />
    </div>
  )
}

export default App;
