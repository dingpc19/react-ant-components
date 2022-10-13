import classNames from "classnames";
import { PropsWithChildren, useContext } from "react";
import { MenuContext } from "./menu";
export interface MenuItemProps {
  className?: string;
  style?: React.CSSProperties;
  index?: string;
  disabled?: boolean;
  children?: any;
}
const MenuItem: React.FC<PropsWithChildren<MenuItemProps>> = (props) => {
  const { style, index, disabled, className, children } = props;
  const context = useContext(MenuContext);
  const classes = classNames("menu-item", className, {
    "is-disabled": disabled,
    "is-active": context.index === index,
  });
  const handleClick = () => {
    if (context.onSelect && !disabled) {
      context.onSelect(index!);
    }
  };
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};
MenuItem.displayName = "MenuItem";

export default MenuItem;
