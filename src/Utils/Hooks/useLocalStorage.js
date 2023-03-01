import { useState } from 'react';

/**
 * This is a hook to store and retrieve information from local storage
 */
export default function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(() => {
    if (localStorage.getItem(key) === null) {
      return initialValue;
    }
    return localStorage.getItem(key);
  });
  const setStateAndModifyStorage = (stateToSet) => {
    setState(stateToSet);
    localStorage.setItem(key, stateToSet);
  };
  return [state, setStateAndModifyStorage];
}
