import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { SearchProvider } from './context/SearchContext.tsx'
import { FormDataProvider } from './context/FormDataContext.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <FormDataProvider>
      <SearchProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </SearchProvider>
    </FormDataProvider>
  </BrowserRouter>,
)
