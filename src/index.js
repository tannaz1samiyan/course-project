
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import { ThemeProvider } from 'react-bootstrap';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
   <ThemeProvider dir="rtl">
  <App />
</ThemeProvider>
);



