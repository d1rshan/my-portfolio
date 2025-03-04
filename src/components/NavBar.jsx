import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { header } from "framer-motion/client";

export default function () {
  return (
    <header>
      <div className="fixed left-1/2 top-5 -translate-x-1/2 sm:flex justify-evenly bg-black hidden sm:mx-auto sm:w-[400px] py-2 rounded-full">
        <NavBarItem value={"Hey"} id={"#"} />
        <NavBarItem value={"About"} id={"#about"} />
        <NavBarItem value={"Skills"} id={"#skills"} />
        <NavBarItem value={"Chat"} id={"#"} />
      </div>
      <FloatingNavBar />
    </header>
  );
}

function NavBarItem({ value, id }) {
  return (
    <a
      href={id}
      className="text-gray-600 text-2xl font-semibold hover:text-white"
    >
      {value}
    </a>
  );
}

function FloatingNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block sm:hidden fixed top-5 left-1/2 -translate-x-1/2 z-50">
      {/* Nav Button */}
      <motion.button
        className="bg-black text-white px-6 py-3 rounded-full flex justify-end items-center gap-2 w-[90vw]"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
      >
        <span className="text-gray-600 text-2xl font-semibold ">Menu</span>
        <Menu size={24} color="gray" />
      </motion.button>

      {/* Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="w-full absolute bg-black rounded-[1.5em] mt-2 overflow-hidden py-2"
        >
          <div className="flex flex-col text-center gap-1.5">
            <NavBarItem value={"Hey"} id={"#"} />
            <NavBarItem value={"About"} id={"#about"} />
            <NavBarItem value={"Skills"} id={"#skills"} />
            <NavBarItem value={"Chat"} id={"#"} />
          </div>
        </motion.div>
      )}
    </div>
  );
}
