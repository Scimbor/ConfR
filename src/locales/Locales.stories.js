import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  FormattedMessage,
  FormattedDate,
  FormattedNumber,
  FormattedTime,
} from 'react-intl'

const wrapper = {
  margin: '10px',
}
const code = {
  backgroundColor: '#f6f8fa',
  padding: '15px',
  margin: '10px 0',
  display: 'block',
  width: '850px',
}

storiesOf('Translations', module)
  .add('How to add a new language?', () => (
    <div style={wrapper}>
      <h2>How to add a new language?</h2>
      <ol>
        <li>
          Go to: <code>src/index.js</code>
        </li>
        <li>
          Import locale data
          <code style={code}>
            import [Language] from 'react-intl/locale-data/[language]'
          </code>
          Example:
          <code style={code}>import en from 'react-intl/locale-data/en'</code>
        </li>
        <li>
          Add locale data to: <code>addLocaleData()</code>
        </li>
        <li>
          Go to
          <code> src/locales/ </code>
          and create new json file e.g.: <code>en.json</code>
        </li>
        <li>
          Import your json file in <code>src/index.js</code> <br />
          <code style={code}>
            import locales_[language] from './locales/[language.json]'
          </code>
          Example:
          <code style={code}>import locales_en from './locales/en.json'</code>
        </li>
        <li>
          Add imported json file to <br />
          <code style={code}>const locales = &#123; &#125;</code>
        </li>
      </ol>
    </div>
  ))
  .add('Where add own translations?', () => (
    <div style={wrapper}>
      <h2>Where add own translations?</h2>
      <ol>
        <li>
          Go to <code>src/locales</code>
        </li>
        <li>
          Choose json file e.g.: <code>en.json</code> and add your translations
        </li>
      </ol>
    </div>
  ))
  .add('How keys should be create?', () => (
    <div style={wrapper}>
      <h2>How keys should be create?</h2>
      <code style={code}>"translationElement": "Your message here"</code>
    </div>
  ))
  .add('FormattedMassage', () => (
    <div style={wrapper}>
      <h2>FormattedMessage</h2>
      By default &lt;FormattedMessage&gt; will render the formatted string into
      a &lt;span&gt;.
      <br /> If you need to customize rendering, you can either wrap it with
      another React element, <br /> specify a different tagName (e.g., 'div'),
      or pass a function as the child.
      <pre>
        <code style={code}>
          import &#123; FormattedMessage &#125; from 'react-intl'
        </code>
        <code style={code}>
          &lt;FormattedMessage <br />
          id=&#123;'exampleHello'&#125; <br />
          defaultMessage=&#123;'Hallo, &#123; name &#125;'&#125; <br />
          values=&#123;&#123; name: 'User' &#125;&#125; <br />
          /&gt; <br />
        </code>
        Result:
        <code style={code}>
          &lt;span&gt;
          <FormattedMessage
            id={'exampleHello'}
            defaultMessage={'Hallo, { name }'}
            values={{ name: 'User' }}
          />
          &lt;/span&gt;
        </code>
        Other way to use FormattedMessage:
        <code style={code}>
          &lt;FormattedMessage <br />
          id=&#123;'exampleHello'&#125; <br />
          defaultMessage=&#123;'Hallo, &#123; name &#125;'&#125; <br />
          values=&#123;&#123; name: 'User' &#125;&#125;&gt; <br />
          &#123;msg => msg&#125;
          <br />
          &lt;/FormattedMessage&gt;
        </code>
        Result:
        <code style={code}>
          <FormattedMessage
            id={'exampleHello'}
            defaultMessage={'Hallo, { name }'}
            values={{ name: 'User' }}>
            {msg => msg}
          </FormattedMessage>
        </code>
      </pre>
    </div>
  ))
  .add('FormattedDate', () => (
    <div style={wrapper}>
      <h2>FormattedDate</h2>
      By default &lt;FormattedDate&gt; will render the formatted date into a
      &lt;span&gt;.
      <br />
      If you need to customize rendering, you can either wrap it with another{' '}
      <br />
      React element or pass a function as the child.
      <code style={code}>
        import &#123; FormattedDate &#125; from 'react-intl'
      </code>
      <code style={code}>
        &lt;FormattedDate value=&#123;Date.now()&#125; /&gt;
      </code>
      Result:
      <code style={code}>
        &lt;span&gt;
        <FormattedDate value={Date.now()} />
        &lt;/span&gt;
      </code>
      Other way to use FormattedDate:
      <code style={code}>
        &lt;FormattedDate value=&#123;Date.now()&#125;&gt;
        <br />
        &#123;date => date&#125;
        <br />
        &lt;/FormattedDate&gt;
      </code>
      Result:
      <code style={code}>
        <FormattedDate value={Date.now()}>{date => date}</FormattedDate>
      </code>
      FormattedDate with options:
      <code style={code}>
        &lt;FormattedDate value=&#123;Date.now()&#125;&gt; <br />
        year="numeric" <br />
        month="long" <br />
        day="2-digit" /&gt; <br />
        <br />
        Options:
        <br />
        year: 'numeric' | '2-digit' <br /> month: 'numeric' | '2-digit' |
        'narrow' | 'short' | 'long' <br /> day: 'numeric' | '2-digit'
        <br /> weekday: 'narrow' | 'short' | 'long' <br /> era: 'narrow' |
        'short' | 'long'
      </code>
      Result:
      <code style={code}>
        <FormattedDate
          value={Date.now()}
          year="numeric"
          month="long"
          day="2-digit"
        />
      </code>
    </div>
  ))

  .add('FormattedTime', () => (
    <div style={wrapper}>
      <h2>FormattedTime</h2>
      By default &lt;FormattedTime&gt; will render the formatted string into a
      &lt;span&gt;.
      <br /> If you need to customize rendering, you can either wrap it with
      another React element <br /> or pass a function as the child.
      <code style={code}>
        import &#123; FormattedTime &#125; from 'react-intl'
      </code>
      <code style={code}>
        &lt;FormattedTime value=&#123;Date.now()&#125; /&gt;
      </code>
      Result:
      <code style={code}>
        &lt;span&gt;
        <FormattedTime value={Date.now()} />
        &lt;/span&gt;
      </code>
      Other way to use FormattedTime:
      <code style={code}>
        &lt;FormattedTime value=&#123;Date.now()&#125;&gt;
        <br />
        &#123;time => time&#125;
        <br />
        &lt;/FormattedTime&gt;
      </code>
      Result:
      <code style={code}>
        <FormattedTime value={Date.now()}>{time => time}</FormattedTime>
      </code>
      FormattedTime with options:
      <code style={code}>
        &lt;FormattedDate value=&#123;Date.now()&#125;&gt; <br />
        timeZoneName="long"" <br />
        hour="2-digit" <br />
        minute="2-digit" <br />
        second="2-digit" /&gt; <br />
        <br />
        Options:
        <br />
        hour: 'numeric' | '2-digit' <br /> minute: 'numeric' | '2-digit'
        <br /> second: 'numeric' | '2-digit' <br /> timeZoneName: 'short' |
        'long'
      </code>
      Result:
      <code style={code}>
        <FormattedTime
          value={Date.now()}
          timeZoneName="long"
          hour="2-digit"
          minute="2-digit"
          second="2-digit"
        />
      </code>
    </div>
  ))
  .add('FormattedNumber', () => (
    <div style={wrapper}>
      <h2>FormattedNumber</h2>
      By default &lt;FormattedNumber&gt; will render the formatted string into a
      &lt;span&gt;.
      <br /> If you need to customize rendering, you can either wrap it with
      another React element <br /> or pass a function as the child.
      <pre>
        <code style={code}>
          import &#123; FormattedNumber &#125; from 'react-intl'
        </code>
        <code style={code}>
          &lt;FormattedNumber value=&#123;123000000.02&#125; /&gt;
        </code>
        Result:
        <code style={code}>
          &lt;span&gt;
          <FormattedNumber value={123000000.02} />
          &lt;/span&gt;
        </code>
        Other way to use FormattedNumber:
        <code style={code}>
          &lt;FormattedNumber value=&#123;123000000.02&#125;&gt;
          <br />
          &#123;number => number&#125;
          <br />
          &lt;/FormattedNumber&gt;
        </code>
      </pre>
    </div>
  ))
  .add('Plural', () => (
    <div style={wrapper}>
      <h2>Plural</h2>
      <pre>
        <code style={code}>
          &lt;FormattedMessage <br />
          id=&#123;'exampleItem'&#125; <br />
          values=&#123;&#123; count: 8 &#125;&#125; <br />
          defaultMessage=&#123; '&#123;count, plural, =0 &#123;no items&#125;
          one &#123;# item&#125; few &#123;# items&#125; other &#123;#
          items&#125;&#125;' &#125; <br />
          /&gt; <br />
        </code>
        Result:
        <code style={code}>
          &lt;span&gt;
          <FormattedMessage
            id={'exampleItem'}
            values={{ count: 8 }}
            defaultMessage={
              '{count, plural, =0 {no items} one {# item} few {# items} other {# items}}'
            }
          />
          &lt;/span&gt;
        </code>
        Result:
        <code style={code}>
          <FormattedNumber value={123000000.02}>{time => time}</FormattedNumber>
        </code>
      </pre>
    </div>
  ))
  .add('Input Placeholder', () => (
    <div style={wrapper}>
      <h2>Input Placeholder</h2>
      <code style={code}>
        &lt;FormattedMessage id=&#123;'examplePlaceholder'&#125;
        <br />
        defaultMessage=&#123;'Number of items'&#125;/&gt;
        <br />
        &#123;msg => &lt;input type="number" placeholder=&#123;msg&#125;
        /&gt;&#125;
        <br />
        &lt;/FormattedMessage/&gt;
      </code>
      <FormattedMessage
        id={'examplePlaceholder'}
        defaultMessage={'Number of items'}>
        {msg => <input type="number" placeholder={msg} />}
      </FormattedMessage>
    </div>
  ))
