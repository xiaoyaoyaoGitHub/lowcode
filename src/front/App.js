
import 'normalize.css'
import './style.scss'
import Home from "./container/Home";
import { Helmet, HelmetProvider } from "react-helmet-async"
const App = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{localStorage.title}</title>
      </Helmet>
      <Home />
    </HelmetProvider>

  );
}

export default App;
