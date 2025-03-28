import {
  createContext,
  ReactNode,
  useLayoutEffect,
  useReducer,
  useState,
} from "react";
import { initState, storeReducer } from "./store";
import axios from "axios";

const Store = createContext(initState);

function StoreProvider({ children }: { children: ReactNode }) {
  const [store, dispatch] = useReducer(storeReducer, initState);
  const [init, setInit] = useState(false);

  const _getAllMenu = async () => {
    try {
      const res = await axios.get(
        "https://hibi-service.vercel.app/api/menu/getAllMenu",
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      );
      dispatch({ type: "UPDATE_MENU", payload: res.data });
      setInit(true);
    } catch (error) {
      console.error("Frontend API Error:", error);
    }
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
