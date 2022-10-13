import "./styles/index.scss";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Icon from "./components/Icon/icon";
import Button from "./components/Button/button";
import Transition from "./components/Transition/transition";
import { useState } from "react";

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <Icon icon="coffee" size="10x" theme="primary" />
      <Button
        onClick={() => {
          alert(123);
        }}
      >
        Hello
      </Button>
      <Button disabled>Hello</Button>
      <Button btnType="primary" size="lg">
        Hello
      </Button>
      <Button btnType="link" href="http://www.baidu.com">
        Baidu Link
      </Button>

      <Menu
        defaultIndex={"0"}
        onSelect={(index) => {
          alert(index);
        }}
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
      <Button
        size="lg"
        btnType="default"
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle
      </Button>
      <Transition in={show} timeout={300} animation="zoom-in-top">
        <p>dsfokl;'fdsssdsfdfdfhujiklftgyhujikolpghujkl;hujkl;</p>
      </Transition>
      <Transition in={show} timeout={300} animation="zoom-in-top" wrapper>
        <Button btnType="primary" size="lg">
          A large button
        </Button>
      </Transition>
    </div>
  );
};

export default App;
