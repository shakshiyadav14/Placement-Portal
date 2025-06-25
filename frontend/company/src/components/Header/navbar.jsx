import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <div className="sticky top-0 bg-gray-900 p-2 z-50">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-white bg-gray-900 p-1"
    >
      <Tab setPosition={setPosition} href="/">Home</Tab>
      <Tab setPosition={setPosition} href="/companyRequirements">Requirements</Tab>
      <Tab setPosition={setPosition} href="/StudentDetails">Students</Tab>
      <Tab setPosition={setPosition} href="/uploadResult">Upload Result</Tab>
      <Tab setPosition={setPosition} href="/stats">Stats</Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, href }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      <a href={href} className="block">
        {children}
      </a>
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-white md:h-12"
    />
  );
};