import React from "react";
import {
  RiHome6Line,
  RiPercentLine,
  RiPieChart2Line,
  RiMailUnreadLine,
  RiNotification2Line,
  RiSettings3Line,
  RiLogoutBoxLine,
} from "react-icons/ri";
const Sidebar = () => {
  let primaryColor = "bg-[#ec7c6a]";
  let secondaryColor = "bg-[#262837]";
  let primaryColorText = "[#ec7c6a]";

  return (
    <div className="bg-[#1F1D2B] fixed top-0 left-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl">
      <div>
        <ul className="pl-4 cursor-pointer">
          <li>
            <h1 className="text-xl text-gray-300 uppercase font-bold text-center my-5">
              Yhethi
            </h1>
          </li>

          <li className={`p-4 ${secondaryColor} rounded-tl-xl rounded-bl-xl`}>
            <a
              className={`rounded-tl-xl ${primaryColor} rounded-xl p-4 flex justify-center`}
              href="#"
            >
              <RiHome6Line className="text-2xl text-white" />
            </a>
          </li>

          <li
            className={`hover:${secondaryColor} p-4 rounded-tl-xl rounded-bl-xl group transition-colors`}
          >
            <a
              className={`group-hover:${primaryColor} rounded-tl-xl rounded-xl p-4 flex justify-center transition-colors`}
              href="#"
            >
              <RiPercentLine
                className={`text-2xl text-${primaryColorText} group-hover:text-white transition-colors`}
              />
            </a>
          </li>

          <li
            className={`hover:${secondaryColor} p-4 rounded-tl-xl rounded-bl-xl group transition-colors`}
          >
            <a
              className={`group-hover:${primaryColor} rounded-tl-xl rounded-xl p-4 flex justify-center transition-colors`}
              href="#"
            >
              <RiPieChart2Line
                className={`text-2xl text-${primaryColorText} group-hover:text-white transition-colors`}
              />
            </a>
          </li>

          <li
            className={`hover:${secondaryColor} p-4 rounded-tl-xl rounded-bl-xl group transition-colors`}
          >
            <a
              className={`group-hover:${primaryColor} rounded-tl-xl rounded-xl p-4 flex justify-center transition-colors`}
              href="#"
            >
              <RiMailUnreadLine
                className={`text-2xl text-${primaryColorText} group-hover:text-white transition-colors`}
              />
            </a>
          </li>

          <li
            className={`hover:${secondaryColor} p-4 rounded-tl-xl rounded-bl-xl group transition-colors`}
          >
            <a
              className={`group-hover:${primaryColor} rounded-tl-xl rounded-xl p-4 flex justify-center transition-colors`}
              href="#"
            >
              <RiNotification2Line
                className={`text-2xl text-${primaryColorText} group-hover:text-white transition-colors`}
              />
            </a>
          </li>

          <li
            className={`hover:${secondaryColor} p-4 rounded-tl-xl rounded-bl-xl group transition-colors`}
          >
            <a
              className={`group-hover:${primaryColor} rounded-tl-xl rounded-xl p-4 flex justify-center transition-colors`}
              href="#"
            >
              <RiSettings3Line
                className={`text-2xl text-${primaryColorText} group-hover:text-white transition-colors`}
              />
            </a>
          </li>
        </ul>
      </div>

      <div>
        <ul className="pl-4 cursor-pointer">
          <li
            className={`hover:${secondaryColor} p-4 rounded-tl-xl rounded-bl-xl group transition-colors`}
          >
            <a
              className={`group-hover:${primaryColor} rounded-tl-xl rounded-xl p-4 flex justify-center transition-colors`}
              href="#"
            >
              <RiLogoutBoxLine
                className={`text-2xl text-${primaryColorText} group-hover:text-white transition-colors`}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
