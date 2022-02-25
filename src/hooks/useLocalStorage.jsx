import { useEffect, useState } from 'react';

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    const initialValue = JSON.parse(saved);
    return initialValue || defaultValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};

export default useLocalStorage;
