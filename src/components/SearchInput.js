import React from "react";
import styled from "@emotion/styled";

const Input = styled("input")`
  font-size: 0.9em;
  padding: 10px 15px;
  margin-bottom: 10px;
  border: none;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.4);
  color: #888888;
`;

export default function SearchInput({ value, onChange }) {
  return (
    <Input
      placeholder="🔎 Search for your favorite wine"
      value={value}
      onChange={(event) => onChange(event.target.value.trim())}
      autoFocus
    />
  );
}
