import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';        
import AuthPage from './pages/AuthPage/Auth.component';
import RecordData from './pages/RecordData/RecordData.component';
import RecordList from './pages/RecordList/RecordList.component'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path = '/' element ={<AuthPage />}/>
        <Route path = '/record-data' element ={<RecordData />}/>
        <Route path = '/record-list' element ={<RecordList />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
