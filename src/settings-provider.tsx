import { useEffect, useState } from 'react';
import { SettingsContext, type SettingsContextType } from './settings-context';

export default function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState<SettingsContextType['isModalOpen']>(false);

  const toggleModal: SettingsContextType['toggleModal'] = () => setIsModalOpen((prev) => !prev);

  const [options, setOptions] = useState<SettingsContextType['options']>({
    theme: (localStorage.getItem('theme') as SettingsContextType['options']['theme']) ?? 'light',
    displayTables: 'list',
  });

  useEffect(() => {
    localStorage.setItem('theme', options.theme);

    if (options.theme === 'dark') {
      document.documentElement.className = options.theme;
    } else {
      document.documentElement.className = '';
    }
  }, [options.theme]);

  return (
    <SettingsContext value={{ isModalOpen, toggleModal, options, setOptions }}>
      {children}
    </SettingsContext>
  );
}
