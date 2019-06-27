import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { IntlProvider, addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import pl from 'react-intl/locale-data/pl'
import locales_en from './locales/en.json'
import locales_pl from './locales/pl.json'

addLocaleData([...en, ...pl])
const locales = { en: locales_en, pl: locales_pl }
const language = window.navigator.language || 'en'
const [languageWithoutRegionCode] = language.toLowerCase().split('-')

ReactDOM.render(
  <IntlProvider
    locale={language}
    messages={locales[languageWithoutRegionCode]}
    key={language}
    defaultLocale="en">
    <App />
  </IntlProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
