import { createContext, ReactNode, useMemo, useReducer } from "react";
import { initState, storeReducer } from "./store";

const Store = createContext(initState);

function StoreProvider({ children }: { children: ReactNode }) {
  const [store, dispatch] = useReducer(storeReducer, initState);

  const updateCart = (objValue: any) => {
    dispatch({ type: "ADD_TO_CART", payload: objValue });
  };

  const memoStore = useMemo(() => {
    return {
      ...store,
      updateCart,
    };
  }, [store]);

  return <Store.Provider value={memoStore}>{children}</Store.Provider>;
}

export { StoreProvider, Store };
