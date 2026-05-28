import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/offcanvas.js'
import 'bootstrap/js/dist/collapse.js';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)


