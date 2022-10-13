// YourComponent.stories.ts|tsx

import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Menu from "./menu";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";
library.add(fas);
const defaultMenu = () => (
  <Menu
    defaultIndex={"0"}
    onSelect={action}
    mode="vertical"
    defaultOpenSubMenus={[]}
  >
    <MenuItem index={"0"}>active</MenuItem>
    <MenuItem index={"1"} disabled>
      disabled
    </MenuItem>
    <MenuItem index={"2"}>xyz</MenuItem>
    <SubMenu title="dropdown">
      <MenuItem>drop1</MenuItem>
    </SubMenu>
  </Menu>
);

storiesOf("Menu Component", module).add("默认 Menu", defaultMenu);
