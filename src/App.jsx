import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { Provider } from "react-redux";
import appStore from './utils/appStore';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <>
      <Provider store={appStore} >
        <ScrollToTop />
        <Header />
        <Outlet />
      </Provider>
    </>
  )
}

export default App
