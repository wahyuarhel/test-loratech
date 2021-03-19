import Navbar from './components/navbar/Navbar'
import Main from './pages/homepage/Main'
import Menu_2 from './pages/menu_2'
import Footer from './components/footer/Footer'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
      <Route exact path='/menu_2' component={Menu_2} />
      <Route exact path='/' component={Main} />
      <Footer />
    </div>
  )
}

export default App;
