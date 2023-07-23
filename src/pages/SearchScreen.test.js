import React from "react";
import { render, screen } from "@testing-library/react";
import SearchScreen from "./SearchScreen";

test("Loading search page", async () => {
  render(<SearchScreen />);
  const caption = screen.getByText(/Nasa Media Library/i);
  expect(caption).toBeInTheDocument();
});
