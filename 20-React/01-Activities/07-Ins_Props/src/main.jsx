import ReactDOM from 'react-dom/client';
import App from './App';

// Here we import bootstrap to have access to some additional styling
import 'bootstrap/dist/css/bootstrap.min.css';

// DON'T SEND IN PROPS FROM MAIN.JSX
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
