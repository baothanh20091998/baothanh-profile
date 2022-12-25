import { headerConfig } from "config";
import React, { useState } from "react";
import Button from "../Button";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons"
import useWindowDimensions from "utils/useWindowDimensions";

const Header = () => {
  const { width, height } = useWindowDimensions()
  const [open, setOpen] = useState(false)
  const toggleOpen = () => {
    setOpen(!open)
    if (width < 768) {
      const body = document.getElementsByTagName("body")
      if (!open) body[0].className = "overflow-hidden"
      else body[0].className = ""
    }
  }

  const renderHeader = (Item: typeof headerConfig[0]) => {
    return (
      <Button onPress={toggleOpen} key={Item.title} href={Item.href} type="header">
        <div className="flex items-center justify-center">
          <Item.icon style={{ fontSize: "18px" }} />
          <span className="ml-2">{Item.title}</span>
        </div>
      </Button>
    )
  }
  return (
    <>
      {open ? (
        <div
          onClick={toggleOpen}
          className="md:hidden bg-black opacity-70 z-40 absolute top-0 left-0 w-full h-full"></div>
      ) : null}
      <header className="mx-auto bg-black md:bg-transparent z-50 left-0 absolute top-0 w-full flex-col md:flex-row flex md:items-center pt-4 md:py-4">
        <div
          className="md:hidden mr-2 mb-2 rounded-full bg-gradient-to-r w-12 h-12 flex justify-center items-center ml-auto"
          onClick={toggleOpen}
        >
          {
            open ? <CloseOutlined className="text-lg" /> :
              <MenuOutlined className="text-lg" />
          }
        </div>
        <nav className={"md:flex md:flex-row justify-center w-full gap-x-4 items-center " + (open ? "" : "hidden")}>
          {headerConfig.map(renderHeader)}
        </nav>
      </header>
    </>
  )
}

export default Header