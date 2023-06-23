
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home/Home.jsx'
import { BrowserRouter,Routes,Route} from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/product' element={<Home/>}/>
    </Routes>
</BrowserRouter>

    

)
