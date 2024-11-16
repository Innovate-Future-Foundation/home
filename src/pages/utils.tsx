import React, { ReactNode } from "react";
import { Button, ButtonProps } from "antd";

// Update the RenderItem interface
interface RenderItem {
  name: string;
  href?: string;
  children: string | ReactNode;
  [key: string]: any;
}

export const isImg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/;

export const getChildrenToRender = (item: RenderItem, i: number): ReactNode => {
  let tag = item.name.indexOf("title") === 0 ? "h1" : "div";
  tag = item.href ? "a" : tag;

  // Handle image children
  let children: ReactNode =
    typeof item.children === "string" && item.children.match(isImg)
      ? React.createElement("img", { src: item.children, alt: "img" })
      : item.children;

  // Handle button children
  if (item.name.indexOf("button") === 0 && typeof item.children === "object") {
    children = React.createElement(
      Button,
      (item.children as unknown) as ButtonProps
    );
  }

  // Create the final element
  const props = {
    key: i.toString(),
    ...item,
  };

  return React.createElement(tag, props, children);
};
