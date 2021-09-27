import { render, screen } from "@testing-library/react";
import EmojiResultRow from "./EmojiResultRow";
import React from "react";

describe("Render all of the emoji", () => {
  let emoji, copy;

  beforeEach(() => {
    render(<EmojiResultRow />);
    emoji = document.createElement("div");
    copy = screen.getByText("Click to copy emoji");
  });

  test("Emoji render", () => {
    expect(emoji).toBe();
  });

  test("Click the copy emoji", () => {
    expect(copy).toBe();
  });
});
