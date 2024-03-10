import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { IntlProvider } from 'react-intl';
import French from './lang/fr.json';
import Spanish from './lang/es.json';
import English from './lang/en.json';

const locale = navigator.language;

let lang;
if (locale === "es") {
  lang = Spanish;
} else {
  if (locale === "fr") {
    lang = French;
  } else {
    lang = English;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(<IntlProvider locale={locale} messages={lang}>
  <App />
</IntlProvider>);
