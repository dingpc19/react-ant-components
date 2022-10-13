import Menu, { MenuProps } from "./menu";
import SubMenu, { SubMenuProps } from "./subMenu";
import MenuItem, { MenuItemProps } from "./menuItem";
import { type } from "@testing-library/user-event/dist/type";
import { FC } from "react";

export type IMenuComponent = FC<MenuProps> & {
  SubMenu: FC<SubMenuProps>;
  Item: FC<MenuItemProps>;
};

const TransMenu = Menu as IMenuComponent;
TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;

export default TransMenu;
