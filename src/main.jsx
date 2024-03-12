import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { IntlProvider } from 'react-intl';
import French from './lang/fr.json';
import Spanish from './lang/es.json';
import English from './lang/en.json';


let lang;

let locale = window.navigator.languages ? window.navigator.languages[0] : null;
locale = locale || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;

let shortLang = locale;
if (shortLang.indexOf('-') !== -1)
  shortLang = shortLang.split('-')[0];

if (shortLang.indexOf('_') !== -1)
  shortLang = shortLang.split('_')[0];

console.log(lang, shortLang);

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
