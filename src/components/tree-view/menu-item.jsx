/* eslint-disable react/prop-types */

import { useState } from "react";
import MenuList from "./menuList";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function MenuItem({ item }) {
  const [displayCurrChildren, setdisplayCurrChildren] = useState({});

  function handleToggleChildren(getCurrentLabel) {
    setdisplayCurrChildren({
      ...displayCurrChildren,
      [getCurrentLabel]: !displayCurrChildren[getCurrentLabel],
    });
  }

  return (
    <li >
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrChildren[item.label] ? (
              <FaMinus color="#fff" size={25} />
            ) : (
              <FaPlus color="#fff" size={25} />
            )}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
