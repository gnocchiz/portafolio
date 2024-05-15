import ReactDOM from 'react-dom';
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Home, About, Projects, Contact } from './pages'

const App = () => {
  return (
    <main>
        <HashRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </HashRouter>
    </main>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
