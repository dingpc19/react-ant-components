import React from "react";
import { addDecorator } from "@storybook/react";
import "../src/styles/index.scss";
import { withInfo } from "@storybook/addon-info";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  info: { inline: true, header: false },
};
addDecorator(withInfo);
const storyWrapper = (storyFn: any) => (
  <div>
    <h3>组件演示</h3>
    {storyFn()}
  </div>
);
addDecorator(storyWrapper);
