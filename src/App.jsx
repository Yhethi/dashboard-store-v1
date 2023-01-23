// Icons
import {
  RiMenu3Fill,
  RiUser3Fill,
  RiPieChart2Line,
  RiAddFill,
  RiCloseFill,
  RiSearch2Line,
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
      <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8">
        <div className="lg:col-span-6">
          {/* Header */}
          <header className="p-4">
            {/* Title and search */}
            <div className="flex flex-col gap-4 mb-4">
              <div>
                <h1 className="text-gray-300 text-2xl">Yhethi's Menú</h1>
                <p className="text-gray-500">22 January 2023</p>
              </div>
              <form>
                <div className="w-full relative">
                  <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 text-gray-300 rounded-lg outline-none"
                  />
                </div>
              </form>
            </div>
            {/* Tabs */}
            <div>
              <nav className="text-gray-300 flex items-center gap-4 justify-center border-b-2 border-b-gray-700 lg:justify-start">
                <a
                  href="#"
                  className="relative py-2 pr-4 before:w-1/2 before:bg-[#ec7c6a] before:absolute before:h-1 before:rounded-full before:-bottom-[2px] text-[#ec7c6a]"
                >
                  Hot dishes
                </a>
                <a
                  href="#"
                  className="relative py-2 pr-4 hover:before:w-1/2 hover:before:bg-[#ec7c6a] hover:before:absolute hover:before:h-1 hover:before:rounded-full hover:before:-bottom-[2px] hover:text-[#ec7c6a]"
                >
                  Cold dishes
                </a>
                <a
                  href="#"
                  className="relative py-2 pr-4 hover:before:w-1/2 hover:before:bg-[#ec7c6a] hover:before:absolute hover:before:h-1 hover:before:rounded-full hover:before:-bottom-[2px] hover:text-[#ec7c6a]"
                >
                  Soup
                </a>
                <a
                  href="#"
                  className="relative py-2 pr-4 hover:before:w-1/2 hover:before:bg-[#ec7c6a] hover:before:absolute hover:before:h-1 hover:before:rounded-full hover:before:-bottom-[2px] hover:text-[#ec7c6a]"
                >
                  Grill
                </a>
              </nav>
            </div>
          </header>
        </div>
        <div className="lg:col-span-2 bg-red-300 fixed lg:static right-0">
          Carrito
        </div>
      </main>
    </div>
  );
}

export default App;
