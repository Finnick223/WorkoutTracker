export const getItemFromStorage = (key: string): string | null => {
    const item = localStorage.getItem(key);
    return item ? item : null;
  };