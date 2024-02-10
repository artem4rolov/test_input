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
        setValue(e.target.value.replace(/[^+0-9]/g, ''));
        return;
      }
      setValue(formatPhoneNumber(e.target.value));
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
            pattern="\+7\s\(\d{3}\)\s\d{3,}-\d{2}-\d{2}"
            name="phone"
            type="phone"
            inputMode="phone"
            spellcheck={false}
            autocorrect="off"
            autocapitalize="off"
            onInput={(e) => console.log(e.target.value)}
            placeholder={'+7 (___) ___-__-__'}
            autoComplete="on"
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
