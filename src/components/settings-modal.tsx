import { useState } from 'react';
import { useSettingsContext } from '../settings-context';
import styles from './settings-modal.module.css';

export default function SettingsModal() {
  const { toggleModal, options: initialOptions, setOptions: applyOptions } = useSettingsContext();

  const [options, setOptions] = useState(initialOptions);

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h3>Settings</h3>
        <div>
          <label htmlFor='theme' className='label'>
            Theme
          </label>
          <select
            id='theme'
            value={options.theme}
            className='select w-full'
            onChange={(e) =>
              setOptions((prev) => ({
                ...prev,
                theme: e.target.value as (typeof options)['theme'],
              }))
            }
          >
            <option value='light'>Light</option>
            <option value='dark'>Dark</option>
          </select>
        </div>
        <div>
          <label htmlFor='display_tables' className='label'>
            Display tables
          </label>
          <select
            id='display_tables'
            value={options.displayTables}
            className='select w-full'
            onChange={(e) =>
              setOptions((prev) => ({
                ...prev,
                displayTables: e.target.value as (typeof options)['displayTables'],
              }))
            }
          >
            <option value='list'>List layout</option>
            <option value='grid'>Grid layout</option>
          </select>
        </div>
        <div>
          <button className='btn-outline' onClick={toggleModal}>
            Close
          </button>
          <button
            className='btn'
            onClick={() => {
              applyOptions(options);
              toggleModal();
            }}
            disabled={Object.entries(options).every(
              ([key, value]) => value === initialOptions[key as keyof typeof options],
            )}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
