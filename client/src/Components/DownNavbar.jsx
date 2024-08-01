import React, { useState } from "react";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { navbarData } from "./NavabarData";
// import { ChevronDownIcon } from "@chakra-ui/icons";

import { MdKeyboardArrowDown } from "react-icons/md";
export const DownNavbar = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setOpenMenuIndex(index);
  };

  const handleMouseLeave = () => {
    setOpenMenuIndex(null);
  };
  return (
    <>
      {/* <div className="border h-10 w-full flex justify-center items-center">
        {navbarData.map((ele) => (
          <Menu isOpen={isOpen}>
            <MenuButton
              as={Button}
              // rightIcon={<ChevronDownIcon />}
            key={ele.id}
            background="none"
            _active="none"
            border="none"
            fontWeight="400"
            fontSize=".9em"
            _hover={{
              background: "#F7F7F7",
            }}
              onMouseEnter={onOpen}
              onMouseLeave={onClose}
            >
              {ele.title}
              {ele.arrow}
            </MenuButton>

            <MenuList >
              {ele.child.map((el, i)=>(

              <MenuItem>{el.name}</MenuItem>
              ))}
            </MenuList>
          </Menu>
        ))}
      </div> */}

      <div className="border h-10 w-full flex justify-center items-center gap-2">
        {navbarData.map((ele, index) => (
          <Menu isOpen={openMenuIndex === index} key={ele.id}>
            {/* <div className="flex items-center"> */}
            <MenuButton
              // as={Button}
              background="none"
              border="none"
              fontWeight="400"
              fontSize=".9em"
              _hover={{
                color: "#FF6F61",
              }}
              _focus="none"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {ele.title}
            </MenuButton>
            <MdKeyboardArrowDown />
            {/* </div> */}

            <MenuList className=" absolute -top-2">
              {ele.child.map((el) => (
                <MenuItem key={el.id}>{el.name}</MenuItem>
              ))}
            </MenuList>
          </Menu>
        ))}
      </div>
    </>
  );
};
