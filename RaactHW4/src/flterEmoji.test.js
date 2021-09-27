import { render, screen } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import filterEmoji from "./filterEmoji";

describe("Filtered of the render", () => {
  let input;

  test("Render emoji", () => {
    input = document.createElement("input");
    ReactDOM.render(<filterEmoji />, input);
  });
});
