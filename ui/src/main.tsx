import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalStateProvider } from './stateProviders/GlobalStateProvider.tsx'
import { GlobalModal } from './globalComponents/GlobalModal/GlobalModal.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <GlobalStateProvider>
        <GlobalModal/>
        <Routes>
          <Route path='/'element={<App />}/>
        </Routes>
      </GlobalStateProvider>
    </BrowserRouter>
)
