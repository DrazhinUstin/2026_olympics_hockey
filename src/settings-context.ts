import { createContext, useContext } from 'react';

export interface SettingsContextType {
  isModalOpen: boolean;
  toggleModal: () => void;
  options: { theme: 'light' | 'dark'; displayTables: 'list' | 'grid' };
  setOptions: (opt: SettingsContextType['options']) => void;
}

export const SettingsContext = createContext<SettingsContextType | null>(null);

export const useSettingsContext = () => {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error('useSettingsContext must be used within a SettingsProvider');
  }

  return context;
};
