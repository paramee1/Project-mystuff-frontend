import ShoppingMain from "../pages/ShoppingMain";
import ShoppingItem from "../pages/ShoppingItem";
import LoginRegis from "../pages/LoginRegis";
import MainIndex from "../pages/MainIndex";
import Profile from "../pages/Profile";
import CartPage from "../pages/CartPage";
import OrderPage from "../pages/OrderPage";
import ConfirmOrder from "../pages/ConfirmOrder";

const routes = {
  admin: {
    route: [
      {
        path: "/product",
        component: ShoppingMain,
        exact: true,
      },
      {
        path: "/product/:productId",
        component: ShoppingItem,
      },
      {
        path: "/item",
        component: ShoppingItem,
      },
      {
        path: "/cart",
        component: CartPage,
      },
      {
        path: "/checkout",
        component: OrderPage,
      },
      {
        path: "/profile",
        component: Profile,
      },
      {
        path: "/",
        component: MainIndex,
      },
    ],
    redirect: "/",
  },

  user: {
    route: [
      {
        path: "/product",
        component: ShoppingMain,
        exact: true,
      },
      {
        path: "/product/:productId",
        component: ShoppingItem,
      },
      {
        path: "/item",
        component: ShoppingItem,
      },
      {
        path: "/cart",
        component: CartPage,
      },
      {
        path: "/checkout",
        component: OrderPage,
      },
      {
        path: "/confirm/:orderId",
        component: ConfirmOrder,
      },
      {
        path: "/profile",
        component: Profile,
      },
      {
        path: "/",
        component: MainIndex,
      },
    ],
    redirect: "/",
  },

  guest: {
    route: [
      {
        path: "/login",
        component: LoginRegis,
      },
      {
        path: "/product",
        component: ShoppingMain,
        exact: true,
      },
      {
        path: "/",
        component: MainIndex,
        exact: true,
      },
    ],
    redirect: "/login",
  },
};

export default routes;
