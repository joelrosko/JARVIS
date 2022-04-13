import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from './app/store'
import { Provider } from 'react-redux'

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  rootElement
);
