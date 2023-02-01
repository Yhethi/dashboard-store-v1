// Icons
import {
  RiMenu3Fill,
  RiUser3Fill,
  RiPieChart2Line,
  RiAddFill,
  RiCloseFill,
  RiSearch2Line,
  RiArrowDownSLine,
  RiDeleteBin6Line,
} from "react-icons/ri";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "./features/cartProducts/cpSlice";

// Components
import Sidebar from "./components/shared/Sidebar";
// Hooks
import { useState } from "react";
import { render } from "react-dom";
import CartProduct from "./components/shared/CartProduct";

import * as ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleOrder = () => {
    setShowOrder(!showOrder);
  };

  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.cartProduct);

  const [product, setProduct] = useState({
    image: "",
    name: "",
    precio: "",
  });

  const changeInputs = (product) => {
    let enviarProducts = document.getElementById("enviarProducts");
    if (product.target.tagName == "DIV") {
      product = product.target.parentNode.children[0];
      let pImg = product.children[0].src;
      let pName = product.children[1].textContent;
      let pPrice = product.children[2].textContent;

      handleChange(pImg, pName, pPrice);
    } else {
      product = product.target.parentNode;
      let pImg = product.children[0].src;
      let pName = product.children[1].textContent;
      let pPrice = product.children[2].textContent;

      handleChange(pImg, pName, pPrice);
    }
  };

  const handleChange = (pImg, pName, pPrice) => {
    console.log("dentro del handle" + pImg, pName, pPrice);
    setProduct({
      ...product,
      image: pImg,
      name: pName,
      precio: pPrice,
    });
    enviarCarrito(pImg, pName, pPrice);
  };

  const enviarCarrito = (pImg, pName, pPrice) => {
    const pLength = cartProduct.length + 1;
    dispatch(
      addProduct({
        ...product,
        id: pLength,
        image: pImg,
        name: pName,
        precio: pPrice,
      })
    );
    // console.log(e);
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
        <button
          onClick={() => {
            if (showMenu == true) {
              toggleMenu();
            }
            toggleOrder();
          }}
          className="p-2"
        >
          {showOrder ? <RiCloseFill /> : <RiPieChart2Line />}
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
          <div className="grid grid-cols-1 gap-16 p-8 md:grid-cols-2 lg:grid-cols-3 lg:h-[68vh] lg:py-16 lg:overflow-y-scroll">
            {/* Card */}

            <a
              onClick={(e) => {
                changeInputs(e);
              }}
            >
              <div className="bg-[#1F1D2B] text-center rounded-2xl flex flex-col items-center text-gray-300 gap-1 font-bold p-8">
                <img
                  src="comida.png"
                  className="w-40 h-40 object-cover -mt-20 shadow-3xl rounded-full"
                />
                <p className="text-xl">Akira Tower</p>
                <span className="text-gray-400">$2.29</span>
                <p className="text-gray-600">20 Stock Avaliable</p>
              </div>
            </a>

            <a
              onClick={(e) => {
                changeInputs(e);
              }}
            >
              <div className="bg-[#1F1D2B] text-center rounded-2xl flex flex-col items-center text-gray-300 gap-1 font-bold p-8">
                <img
                  src="comida.png"
                  className="w-40 h-40 object-cover -mt-20 shadow-3xl rounded-full"
                />
                <p className="text-xl">Akira Tower2</p>
                <span className="text-gray-400">$2.29</span>
                <p className="text-gray-600">20 Stock Avaliable</p>
              </div>
            </a>
          </div>
        </div>

        {/* Orders */}
        <div
          className={`${
            showOrder ? "right-0" : "-right-full"
          } lg:col-span-2 fixed lg:static right-0 top-0 bg-[#1F1D2B] w-full lg:h-[92vh] h-full transition-all`}
        >
          <div className="relative pt-16 text-gray-300 p-8 h-full">
            <RiCloseFill
              onClick={() => {
                toggleOrder();
              }}
              className="absolute top-4 left-4 lg:-top-40  p-3 box-content bg-[#262837] text-gray-100 rounded-full"
            />
            <h1 className="text-2xl my-4 ">Orders #151416</h1>
            {/* Tabs Buttons */}
            <div className="flex items-center gap-4 flex-wrap mb-8">
              <button className="bg-[#ec7c6a] text-white rounded-xl py-2 px-4">
                Dine Inc
              </button>
              <button className="border-gray-500 border text-white rounded-xl py-2 px-4">
                To go
              </button>
              <button className="border-gray-500 border text-white rounded-xl py-2 px-4">
                Delivery
              </button>
            </div>
            {/* Cart Products */}
            <div className="h-[450px] overflow-x-hidden overflow-y-scroll mb-70 flex flex-col gap-3 box-content">
              <div className="grid grid-cols-6 pb-4">
                <h5 className="col-span-4">Title</h5>
                <h5>Qty</h5>
                <h5>Price</h5>
              </div>
              {/* Card */}

              <CartProduct />
              {/* <div id="cardContent" className="transition-all">
                <div className="bg-[#262837] p-4 rounded-xl hover:scale-110 transition-all">
                  <div className="grid grid-cols-6 pb-4">
                    <div className="flex items-center col-span-4 gap-3">
                      <img
                        src="comida.png"
                        className="w-10 h-10 object-cover"
                      />
                      <div className="">
                        <h5 className="text-ms">Akira Tower</h5>
                        <p className="text-xs text-gray-500">$2.29</p>
                      </div>
                    </div>
                    <div>
                      <span className="text-center bg-[#FFFFFF22] h-full flex flex-col justify-center rounded-xl">
                        2
                      </span>
                    </div>
                    <div>
                      <span className="text-center flex flex-col justify-center h-full ">
                        4.58$
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-2">
                    <form className="col-span-5">
                      <input
                        type="text"
                        className="bg-[#1F1D2B] p-2 rounded-lg text-gray-300 w-full outline-none"
                        placeholder="Order note..."
                      />
                    </form>
                    <div className="flex justify-center border border-red-600 rounded-md bg-[#ff000005]">
                      <button>
                        <RiDeleteBin6Line className="p-3 box-content text-red-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <CartProduct /> */}
            </div>
            {/* Submnit payment */}
            <div className="absolute w-full bottom-0 left-0 bg-[#262837] p-4 border-t border-t-[#ec7c6a]">
              <div className="flex item-center justify-between text-gray-400 mb-3">
                <span className="text-gray-300">Discount</span>
                <span>$0</span>
              </div>
              <div className="flex item-center justify-between text-gray-400 mb-3">
                <span className="text-gray-300">Sub Total</span>
                <span>$20.01</span>
              </div>
              <div>
                <button className="w-full py-2 rounded-lg bg-[#ec7c6a] hover:bg-[#ffbfb5] hover:text-black transition-all">
                  Chekout Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
