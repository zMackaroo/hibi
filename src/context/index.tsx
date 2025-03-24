import {
  createContext,
  ReactNode,
  useLayoutEffect,
  useReducer,
  useState,
} from "react";
import { initState, storeReducer } from "./store";

const Store = createContext(initState);

function StoreProvider({ children }: { children: ReactNode }) {
  const [store, dispatch] = useReducer(storeReducer, initState);
  const [init, setInit] = useState(false);

  const _getAllMenu = async () => {
    const req = await fetch(
      "https://www.hibi-service.vercel.app/menu/getallmenu",
      {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res = await req.json();
    dispatch({ type: "UPDATE_MENU", payload: res });
    setInit(true);
  };

  useLayoutEffect(() => {
    if (!init) {
      _getAllMenu();
    }
  }, []);

  const updateCart = (objValue: any) => {
    dispatch({ type: "ADD_TO_CART", payload: objValue });
  };

  const memoStore = {
    ...store,
    updateCart,
  };

  return init && <Store.Provider value={memoStore}>{children}</Store.Provider>;
}

export { StoreProvider, Store };
