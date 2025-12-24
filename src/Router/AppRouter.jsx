import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../layout/MainLayout.jsx"

const Home = lazy(() => import("../page/Home/indes.jsx"));
const Блог = lazy(() => import("../page/Блог"));
const Возврат = lazy(() => import("../page/Возврат"));
const Гарантии = lazy(() => import("../page/Гарантии"));
const Доставка_и_оплата = lazy(() => import("../page/Доставка_и_оплата"));
const Контакты = lazy(() => import("../page/Контакты"));
const О_компании = lazy(() => import("../page/О_Kомпании"));
const PopularProducts = lazy(() => import("../page/PopularProducts/index.jsx"));
const Каталог = lazy(() => import("../page/Каталог/index.jsx"));

function AppRouter() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {" "}
          <Route index element={<Home />} />
          <Route path="popular-products" element={<PopularProducts />} />
          <Route path="Блог" element={<Блог />} />
          <Route path="Возврат" element={<Возврат />} />
          <Route path="Гарантии" element={<Гарантии />} />
          <Route path="Доставка" element={<Доставка_и_оплата />} />
          <Route path="Контакты" element={<Контакты />} />
          <Route path="o_кoмпaнии" element={<О_компании />} />
          <Route path="Каталог" element={<Каталог />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
