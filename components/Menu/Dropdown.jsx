import Link from "next/link";

import { MdArrowDropDown } from "react-icons/md";

const DropdownMenu = ({
  dropdownStates,
  isOpen,
  onMouseEnter,
  onMouseLeave,
  onClick,
  menuName,
  children,
}) => {
  return (
    <>
      <li
        className="relative transition-all ease-in-out"
        onClick={onClick}
        onMouseEnter={() => {
          clearTimeout(dropdownStates[`${menuName}Timeout`]);
          onMouseEnter(menuName);
        }}
        onMouseLeave={onMouseLeave}
      >
        <Link
          href="#"
          className="block font-semibold py-2 px-3 md:p-0 md:hover:text-red-700 md:dark:hover:text-red-500 dark:text-white rounded md:bg-transparent transition-all ease-in-out group"
          aria-current="page"
        >
          {menuName}
          <MdArrowDropDown className="inline-block transform transition-transform duration-300 group-hover:rotate-180" />
        </Link>
        {isOpen && (
          <div className="absolute left-0 mt-2 w-60 bg-white dark:bg-zinc-900 dark:text-white rounded-md shadow-lg z-10 border dark:border-zinc-800">
            <div className="relative">
              <div className="absolute top-0 left-6 transform -translate-x-1/2 -translate-y-full w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-gray-100 dark:border-b-zinc-900"></div>
              <ul className="py-1">{children}</ul>
            </div>
          </div>
        )}
      </li>
    </>
  );
};

export default DropdownMenu;
