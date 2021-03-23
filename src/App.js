import Navbar from './components/navbar/Navbar'
import Login from './pages/login'
import Main from './pages/homepage/'
import Menu_2 from './pages/menu_2'
import Menu_3 from './pages/menu_3'
import Menu_4 from './pages/menu_4'
import Footer from './components/footer/Footer'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
      <Route path='/login' component={Login} />
      <Route path='/menu_4' component={Menu_4} />
      <Route path='/menu_3' component={Menu_3} />
      <Route path='/menu_2' component={Menu_2} />
      <Route exact path='/' component={Main} />
      <Footer />
    </div>
  )
}

export default App;
