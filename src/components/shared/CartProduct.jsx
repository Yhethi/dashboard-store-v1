import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../../features/cartProducts/cpSlice";

import React from "react";

export const CartProduct = (props) => {
  const name = props.name;
  const precio = props.precio;
  const image = props.image;

  const CartProduct = useSelector((state) => state.cartProduct);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return CartProduct.map((cartP) => (
    <div
      key={cartP.id}
      className="bg-[#262837] p-4 rounded-xl hover:scale-110 transition-all"
    >
      <div className="grid grid-cols-6 pb-4">
        <div className="flex items-center col-span-4 gap-3">
          <img src={cartP.image} className="w-10 h-10 object-cover" />
          <div className="">
            <h5 className="text-ms">{cartP.name}</h5>
            <p className="text-xs text-gray-500">{cartP.precio}</p>
          </div>
        </div>
        <div>
          <span className="text-center bg-[#FFFFFF22] h-full flex flex-col justify-center rounded-xl">
            1
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
          <button
            onClick={(e) => {
              handleDelete(cartP.id);
            }}
          >
            <RiDeleteBin6Line className="p-3 box-content text-red-400" />
          </button>
        </div>
      </div>
    </div>
  ));
  // <div className="bg-[#262837] p-4 rounded-xl hover:scale-110 transition-all">
  //   <div className="grid grid-cols-6 pb-4">
  //     <div className="flex items-center col-span-4 gap-3">
  //       <img src={`${image}`} className="w-10 h-10 object-cover" />
  //       <div className="">
  //         <h5 className="text-ms">{`${name}`}</h5>
  //         <p className="text-xs text-gray-500">{`${precio}`}</p>
  //       </div>
  //     </div>
  //     <div>
  //       <span className="text-center bg-[#FFFFFF22] h-full flex flex-col justify-center rounded-xl">
  //         1
  //       </span>
  //     </div>
  //     <div>
  //       <span className="text-center flex flex-col justify-center h-full ">
  //         4.58$
  //       </span>
  //     </div>
  //   </div>
  //   <div className="grid grid-cols-6 gap-2">
  //     <form className="col-span-5">
  //       <input
  //         type="text"
  //         className="bg-[#1F1D2B] p-2 rounded-lg text-gray-300 w-full outline-none"
  //         placeholder="Order note..."
  //       />
  //     </form>
  //     <div className="flex justify-center border border-red-600 rounded-md bg-[#ff000005]">
  //       <button
  //         onClick={(e) => {
  //           console.log(e);
  //           e.target.parentNode.remove();
  //         }}
  //       >
  //         <RiDeleteBin6Line className="p-3 box-content text-red-400" />
  //       </button>
  //     </div>
  //   </div>
  // </div>
};

export default CartProduct;
