import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { IntlProvider } from 'react-intl'

import enTranslations from '../src/locales/en.json'
import plTranslations from '../src/locales/pl.json'

it('renders without crashing EN', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <IntlProvider locale="en" messages={enTranslations}>
      <App />
    </IntlProvider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders without crashing PL', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <IntlProvider locale="pl" messages={plTranslations}>
      <App />
    </IntlProvider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
