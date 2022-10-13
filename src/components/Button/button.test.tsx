import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Button, { ButtonProps } from "./button";
const defaultProps = {
  onClick: jest.fn(),
};

const testProps: ButtonProps = {
  btnType: "primary",
  size: "lg",
  className: "klass",
};

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};

describe("test Button componet", () => {
  it("should render the correct default button", () => {
    render(<Button {...defaultProps}>Nice</Button>);
    const element = screen.queryByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element?.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn btn-default");
    fireEvent.click(element!);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it("should render the correct component based on different props", () => {
    render(
      <Button {...testProps} {...defaultProps}>
        Nice
      </Button>
    );
    const element = screen.queryByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element?.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn btn-primary btn-lg klass");
    fireEvent.click(element!);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it("should render a link when btnType equals link and href is provide", () => {
    render(
      <Button btnType="link" href="https://www.baidu.com">
        Link
      </Button>
    );
    const element = screen.getByText("Link");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("A");
    expect(element).toHaveClass("btn btn-link");
  });
  it("should render disabled button when disabled set to true", () => {
    render(<Button {...disabledProps}>Nice</Button>);
    const element = screen.queryByText("Nice") as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element?.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn btn-default");
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element!);
    expect(defaultProps.onClick).not.toHaveBeenCalled();
  });
});
