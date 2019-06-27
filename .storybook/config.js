import { configure, addDecorator } from '@storybook/react'
import React from 'react'
import GlobalStyles from '../src/AppStyles'
import { setIntlConfig, withIntl } from 'storybook-addon-intl'
import { addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import pl from 'react-intl/locale-data/pl'
import locales_en from '../src/locales/en.json'
import locales_pl from '../src/locales/pl.json'

addLocaleData([...en, ...pl])
const locales = { en: locales_en, pl: locales_pl }
const getMessages = locale => locales[locale]

setIntlConfig({
  locales: ['en', 'pl'],
  defaultLocale: 'en',
  getMessages,
})

function withGlobalStyles(storyFn) {
  return (
    <React.Fragment>
      <GlobalStyles />
      {storyFn()}
    </React.Fragment>
  )
}

function loadStories() {
  const req = require.context('../src', true, /\.stories\.js$/)
  req.keys().forEach(filename => req(filename))
}

addDecorator(withIntl)
addDecorator(withGlobalStyles)
configure(loadStories, module)
