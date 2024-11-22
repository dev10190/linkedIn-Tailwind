import React, { useEffect, useState } from "react";
import linkedin from "../assets/linkedin.png";
import articles from "../assets/article.svg";
import people from "../assets/people.svg";
import learning from "../assets/learning.svg";
import jobs from "../assets/jobs.svg";
import games from "../assets/games.svg";
import app from "../assets/app.svg";
import home from "../assets/home.svg";
import message from "../assets/message.svg";
import notification from "../assets/notification.svg";
import business from "../assets/business.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutButn from "./LogoutButn";
import authService from "../appwrite/auth";
import ProfileDropdown from "./Main/ProfileDropdown";
import Business from "./Main/Business";

const Header = () => {
  const navigate = useNavigate();

  const authStatus = useSelector((state) => state.auth.status);

  const [select, setSelect] = useState("Home");
  console.log(select);

  const navItems = [
    {
      title: "Articles",
      path: "/articles",
      image: articles,
      auth: !authStatus,
    },
    {
      title: "People",
      path: "/people",
      image: people,
      auth: !authStatus,
    },
    {
      title: "Learning",
      path: "/learning",
      image: learning,
      auth: !authStatus,
    },
    {
      title: "Home",
      path: "/home",
      image: home,
      auth: authStatus,
    },
    {
      title: "My Network",
      path: "/network",
      image: people,
      auth: authStatus,
    },
    {
      title: "Jobs",
      path: "/jobs",
      image: jobs,
      auth: true,
    },
    {
      title: "Games",
      path: "/games",
      image: games,
      auth: !authStatus,
    },

    {
      title: "Messaging",
      path: "/message",
      image: message,
      auth: authStatus,
    },
    {
      title: "Notification",
      path: "/notification",
      image: notification,
      auth: authStatus,
    },
  ];

  const listHandle = () => {
    navigate(item.path);
  };

  return (
    <div className=" py-1 w-full max-w-[1200px] m-auto px-5">
      <div className="flex items-center justify-between z-10">
        <div onClick={() => navigate("/")}>
          <img
            className="w-32 stroke-blue-600 cursor-pointer"
            src={linkedin}
            alt=""
          />
        </div>
        <ul className="flex items-center gap-2">
          {navItems.map((item) =>
            item.auth ? (
              <li
                key={item.title}
                onClick={() => navigate(item.path)}
                className={`md:flex md:flex-col hidden justify-center items-center gap-[5px]  w-[80px] py-[2px] cursor-pointer ${
                  select === item.title ? "border-b-2 border-black" : " "
                }`}
              >
                <div
                  onClick={() => setSelect(item.title)}
                  className="flex flex-col items-center gap-[5px]"
                >
                  <div className="w-[20px] h-4 ">
                    <img className="w-full" src={item.image} alt="" />
                  </div>
                  <p
                    className={`font-normal text-gray-900 text-[13px]  ${
                      select === item.title ? "text-black" : " text-gray-400"
                    }`}
                  >
                    {item.title}
                  </p>
                </div>
              </li>
            ) : null
          )}
          {!authStatus && (
            <li
              onClick={() => navigate("/app")}
              className="flex flex-col justify-center items-center gap-[4px] border-x border-x-gray-500 outline-none  px-4 ml-4 mr-2 text-gray-500 font-semibold text-sm"
            >
              <div className="w-4 h-4">
                <img className="w-full" src={app} alt="" />
              </div>
              <p className="text-nowrap">Get the app</p>
            </li>
          )}

          {!authStatus && (
            <li>
              <div className="px-2 flex gap-2">
                <button
                  onClick={() => navigate("/signup")}
                  className="border border-blue-600 outline-none px-6 cursor-pointer py-[8px] rounded-full text-base font-semibold text-blue-600 hover:bg-blue-100 text-nowrap"
                >
                  Sign in
                </button>
                <button
                  onClick={() => navigate("/login")}
                  className=" px-6 py-[8px] rounded-full text-base font-semibold outline-none cursor-pointer bg-blue-600 text-white hover:bg-blue-800 text-nowrap"
                >
                  Join now
                </button>
              </div>
            </li>
          )}

          {authStatus && (
            <li className="w-[80px]">
              <div  className="px-2">
                <ProfileDropdown />
              </div>
            </li>
          )}
          {authStatus && (
            <li className="w-[80px]">
              <div  className="px-2">
                <Business />
              </div>
            </li>
          )}

        
        </ul>
      </div>
    </div>
  );
};

export default Header;
