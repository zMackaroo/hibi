import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/common/layout/layout";
import { lazy, Suspense } from "react";
import { StoreProvider } from "./context";
const Home = lazy(() => import("./components/pages/home/home"));
const Cart = lazy(() => import("./components/pages/cart/cart"));
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <StoreProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="cart" element={<Cart />} />
              <Route path="favorites" element={<div>favorites</div>} />
              <Route path="notifications" element={<div>notifications</div>} />
            </Route>
          </Routes>
        </StoreProvider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
