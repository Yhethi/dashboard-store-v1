// Icons
import {
  RiMenu3Fill,
  RiUser3Fill,
  RiPieChart2Line,
  RiAddFill,
  RiCloseFill,
} from "react-icons/ri";
// Components
import Sidebar from "./components/shared/Sidebar";
// Hooks
import { useState } from "react";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleOrder = () => {
    setShowOrder(!showOrder);
  };

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      {/* Mobile Menu */}
      <nav className="bg-[#1F1D2B] lg:hidden text-gray-500 fixed w-full bottom-0 left-0 text-3xl flex py-2 px-8 item-center justify-between rounded-tr-xl rounded-tl-xl">
        <button className="p-2">
          <RiAddFill />
        </button>
        <button className="p-2">
          <RiUser3Fill />
        </button>
        <button className="p-2">
          <RiPieChart2Line />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseFill /> : <RiMenu3Fill />}
        </button>
      </nav>
    </div>
  );
}

export default App;
