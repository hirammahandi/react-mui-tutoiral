import { createContext, ReactNode, useContext, useState } from 'react';

type StoreContext = {
  items: any[];
  count: number;
  handleCount(): void;
};

const Store = createContext({} as StoreContext);

const Provider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState<any[]>([]);

  const handleCount = () => setCount(count + 1);

  return (
    <Store.Provider
      value={{
        items,
        count,
        handleCount,
      }}
    >
      {children}
    </Store.Provider>
  );
};

export default Provider;

export const useStore = () => useContext(Store);
