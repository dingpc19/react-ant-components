import { render } from "@testing-library/react";
import Input, { InputProps } from "./input";

const defaultProps: InputProps = {
  onChange: jest.fn(),
  placeholder: "test-input",
};
describe("test Input componet", () => {
  it("should render the correct default Input", () => {
    render(<Input {...defaultProps} />);
  });
});
