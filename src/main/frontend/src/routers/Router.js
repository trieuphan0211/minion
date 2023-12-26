import { useRoutes } from "react-router-dom";
import { MainLayout } from "../layouts";
import { HomePage } from "../pages";

const context = "";
const Routers = () => {
  const routing = useRoutes([
    {
      path: context,
      element: <MainLayout />,
      children: [{ path: "/", element: <HomePage /> }],
    },
  ]);
  return routing;
};

export default Routers;
