import App from "../App";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import ItemPage from "../pages/ItemPage";
import ShopPage from "../pages/ShopPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "item/:id", element: <ItemPage /> },
    ],
  },
];

export default routes;
