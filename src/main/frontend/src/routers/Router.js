import { useRoutes } from "react-router-dom";
import { HomeLayout, MainLayout } from "../layouts";
import { HomePage, NotFound, Profile, SignIn, SignUp } from "../pages";

const context = "";
const Routers = () => {
  const routing = useRoutes([
    {
      path: context,
      element: <MainLayout />,
      children: [
        { path: `${context}/`, element: <HomePage /> },
        { path: `${context}/signin`, element: <SignIn /> },
        { path: `${context}/signup`, element: <SignUp /> },
      ],
      action: () => {
        console.log("action");
      },
    },
    {
      path: `${context}/profile`,
      element: <HomeLayout />,
      children: [{ path: ``, element: <Profile /> }],
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);
  return routing;
};

export default Routers;
