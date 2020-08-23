import React from "react";

export default function ListItem({ children, href }) {
  return (
    <a className="listItem" href={href}>
      {children}
    </a>
  );
}
