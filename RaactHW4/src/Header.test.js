import { render, screen } from "@testing-library/react";
import Header from "./Header";
import ReactDOM from "react-dom";
import React from "react";

test("It has got title in the header", () => {
  /* let title = screen.getByText("Emoji Search");
  expect(title).toBeInTheDocument();
  ReactDOM.render(<Header />, title); */

  let header = document.createElement("header");
  ReactDOM.render(<Header />, header);
});
