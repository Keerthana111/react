import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

test("Should load the contact us component", () => {
  //render
    render(<Contact />);

  //querying
  const h1 = screen.getAllByRole("heading");
  //console.log(h1.length);

  //Assertion
  expect(h1.length).toBe(2);
  //expect(h1.length).not.toBe(3);

});
