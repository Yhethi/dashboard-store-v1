// Icons
import {
  RiMenu3Fill,
  RiUser3Fill,
  RiPieChart2Line,
  RiAddFill,
  RiCloseFill,
  RiSearch2Line,
  RiArrowDownSLine,
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
    <div className="bg-[#262837] w-full min-h-screen p-4">
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
      <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 pb-10">
        <div className="lg:col-span-6 md:pr-4">
          {/* Header */}
          <header className="">
            {/* Title and search */}
            <div className="flex flex-col gap-4 mb-4 md:flex-row md:justify-between md:items-center">
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
              <nav className="text-gray-300 flex items-center gap-4 justify-center border-b-2 border-b-gray-700 md:justify-start">
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
          {/*  Title content  */}
          <div className="flex justify-between lg:justify-start gap-2 mb-8 py-4">
            <h2 className="text-gray-300 text-2xl">Choose Dishes</h2>
            <button className="bg-[#1F1D2B] text-gray-300 flex gap-2 items-center p-2 rounded-xl">
              <RiArrowDownSLine className="text-gray-300" />
              Dine in
            </button>
          </div>
          {/* Content */}
          <div className="grid grid-cols-1 gap-16 p-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Card */}
            <div className="bg-[#1F1D2B] text-center rounded-2xl flex flex-col items-center text-gray-300 gap-1 font-bold p-8">
              <img
                src="comida.png"
                className="w-40 h-40 object-cover -mt-20 shadow-3xl rounded-full"
              />
              <p className="text-xl">Akira Tower</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Stock Avaliable</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] text-center rounded-2xl flex flex-col items-center text-gray-300 gap-1 font-bold p-8">
              <img
                src="comida.png"
                className="w-40 h-40 object-cover -mt-20 shadow-3xl rounded-full"
              />
              <p className="text-xl">Akira Tower</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Stock Avaliable</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] text-center rounded-2xl flex flex-col items-center text-gray-300 gap-1 font-bold p-8">
              <img
                src="comida.png"
                className="w-40 h-40 object-cover -mt-20 shadow-3xl rounded-full"
              />
              <p className="text-xl">Akira Tower</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Stock Avaliable</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] text-center rounded-2xl flex flex-col items-center text-gray-300 gap-1 font-bold p-8">
              <img
                src="comida.png"
                className="w-40 h-40 object-cover -mt-20 shadow-3xl rounded-full"
              />
              <p className="text-xl">Akira Tower</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Stock Avaliable</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] text-center rounded-2xl flex flex-col items-center text-gray-300 gap-1 font-bold p-8">
              <img
                src="comida.png"
                className="w-40 h-40 object-cover -mt-20 shadow-3xl rounded-full"
              />
              <p className="text-xl">Akira Tower</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Stock Avaliable</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] text-center rounded-2xl flex flex-col items-center text-gray-300 gap-1 font-bold p-8">
              <img
                src="comida.png"
                className="w-40 h-40 object-cover -mt-20 shadow-3xl rounded-full"
              />
              <p className="text-xl">Akira Tower</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Stock Avaliable</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 fixed lg:static right-0">Carrito</div>
      </main>
    </div>
  );
}

export default App;
