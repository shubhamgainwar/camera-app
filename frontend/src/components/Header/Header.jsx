import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Container from "../Container.jsx";
import { Button } from "flowbite-react";

const Header = () => {
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Help", slug: "/help", active: true },
    { name: "Contact", slug: "/contact", active: true },
  ];
  return (
    <header className="py-3 shadow bg-gray-800 text-white p-4 top-0">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <div className="text-4xl bg-gradient-to-r from-blue-500 via-green-500 to-indigo-600 inline-block text-transparent bg-clip-text">
                MultiCam
              </div>
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-bock px-6 py-2 font-medium duration-200 hover:bg-blue-500 rounded-md "
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
