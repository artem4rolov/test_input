import { Formik, useField } from 'formik';
import './App.scss';
import { Input } from './input';
import { useCallback, useState } from 'react';
import { formatPhoneNumber } from './formatPhoneNumber';

const { detect } = require('detect-browser');

function App() {
  const browser = detect();
  // const [field, meta, { setValue }] = useField({ name: 'enterMobile' });
  const [value, setValue] = useState('');

  const onInputChange = useCallback(
    (e) => {
      if (browser.name === 'ios') {
        setValue(formatPhoneNumber(e));
        return;
      }
      setValue(formatPhoneNumber(e));
    },
    [browser.name]
  );

  return (
    <div className="App">
      <header className="App-header">
        {browser && (
          <p>
            Your browser:
            <strong>{`${browser.name}, version: ${browser.version}, system: ${browser.os}`}</strong>{' '}
          </p>
        )}
        <hr />
        <form onSubmit={() => {}}>
          <input
            size={'large'}
            pattern="\+7\s\(\d{3}\)\s\d{3,}-\d{2}-\d{2}"
            name="phone"
            type="tel"
            inputMode="tel"
            spellcheck={true}
            autocorrect="off"
            autocapitalize="off"
            placeholder={'+7 (___) ___-__-__'}
            autoComplete="on"
            onInput={(e) => onInputChange(e.target.value)}
            onChange={(e) => {
              onInputChange(e.target.value);
            }}
            // onPaste={(e) => {
            //   browser.name === 'ios' && setValue(e.target.value);
            // }}
            value={value ?? '0'}
            style={{
              padding: '10px 15px',
              fontSize: '24px',
            }}
          />
        </form>
      </header>
    </div>
  );
}

export default App;
