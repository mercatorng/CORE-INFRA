import { Outlet } from "react-router";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { useGlobalContext } from "../utils/context";

export const SharedLayout = () => {
  const { homeUrl } = useGlobalContext();

  return (
    <div className={` ${homeUrl ? "bg-[#050806] text-white" : "bg-white text-gray-950"} `}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
