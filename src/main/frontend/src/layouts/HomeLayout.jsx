import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Outlet } from "react-router-dom";

export const HomeLayout = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};
