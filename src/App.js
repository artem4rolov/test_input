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

  const onInputChange = useCallback((e) => {
    setValue(formatPhoneNumber(e.target.value));
  }, []);

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
        <input
          size={'large'}
          name={'enterMobile'}
          type="phone"
          inputMode="numeric"
          placeholder={'+7 (___) ___-__-__'}
          autoComplete="on"
          onChange={onInputChange}
          value={value}
          style={{
            padding: '5px 10px',
            fontSize: '14px',
          }}
        />
      </header>
    </div>
  );
}

export default App;
