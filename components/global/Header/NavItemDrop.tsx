import React, { useState, useRef, useEffect } from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function NavItemDrop({
  name,
  href,
  dropRoutes,
  itemStyle,
  currPath,
}) {
  const node = useRef(null);
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    if (node.current.contains(e.target)) setOpen(true);
    else setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div className={`${itemStyle} relative inline-block text-left`} ref={node}>
      <div>
        <button
          type="button"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          className="font-medium"
        >
          {name}
          <FontAwesomeIcon
            className="-mr-1 ml-1 h-5 w-5 inline-block"
            style={{ marginTop: "-0.1rem" }}
            icon={faAngleDown}
          />
        </button>
      </div>
      {/*
    Dropdown panel, show/hide based on dropdown state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95" */}

      <div
        className={`${
          open ? "block" : "hidden"
        } origin-top-right bg-white absolute right-0 top-11 mt-4 w-48 rounded-md shadow-lg`}
      >
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {dropRoutes.map((r) => {
            let fullHref = href + (r.href == "/" ? "" : r.href);
            return (
              <DropdownMenu
                href={fullHref}
                name={r.name}
                active={fullHref == currPath}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function DropdownMenu({ href, name, active }) {
  const activeStyles = "bg-indigo-50 border-yei-primary-main text-green-900";
  const defaultStyles =
    "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700";
  const [navItemStyle, _] = useState(
    `block px-4 py-2 text-lg border-l-4 text-base font-medium ${
      active ? activeStyles : defaultStyles
    }`
  );
  return (
    <Link href={href}>
      <a className={navItemStyle} role="menuitem">
        {name}
      </a>
    </Link>
  );
}
