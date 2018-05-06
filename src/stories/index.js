import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import {
  action,
  decorateAction,
  configureActions
} from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs/react";
import { withNotes } from "@storybook/addon-notes";
import LinkTo from "@storybook/addon-links/react";
import "../components/App/App.css";

import {
  Button,
  Input,
  ProgressBar,
  GlobalNav,
  LinkList,
  Item,
  ItemNav,
  Icon,
  ItemData
} from "../components";

/***** Stories of Button *****/
action("clicked");
action("triggered");
const buttonStories = storiesOf("Elements/Button", module);

buttonStories
  .addDecorator(withKnobs)
  .add("No props is passed", () => <Button>button</Button>)
  .add("shape='round'", () => (
    <Button
      color="secondary"
      shape="round"
      onClick={action("trigger-an-event")}
    />
  ))
  .add("button w. icon", () => (
    <Button color="icon" onClick={action("clicked")}>
      <Icon icon="rocket" color="pink" />
    </Button>
  ))
  .add("disable/enable", () => (
    <Button
      color="primary"
      disabled={boolean("Disabled", true)}
      onClick={action("triggered")}
    >
      {text("Label", "Write what you want!")}
    </Button>
  ))
  .add("w. icon and text", () => (
    <Button color="secondary" onClick={action("triggered")}>
      <Icon icon="rocket" color="var(--light)" />
      <span>rocket</span>
    </Button>
  ));

/***** Stories of Input *****/
storiesOf("Elements/Input", module)
  .add("underlined text", () => <Input type="text" />)
  .add("classic", () => <Input type="text" variant="classic" />)
  .add("date", () => <Input type="date" />)
  .add("number", () => <Input type="number" />);

/***** Stories of Icon *****/
storiesOf("Elements/Icon", module)
  .add("home, default size - small", () => <Icon icon="home" color="#5e515a" />)
  .add("plus - medium", () => (
    <Icon icon="plus" color="#d9b1b1" size="medium" />
  ))
  .add("cog - large", () => <Icon icon="cog" color="orange" size="large" />)
  .add("rocket, no color provided", () => <Icon icon="rocket" size="xlarge" />);

/***** Stories of Item *****/

const item = {
  itemId: 3,
  delimiter: 30,
  goal: 100,
  goalType: "days of use",
  price: 2499,
  auto: false,
  completed: false,
  createdAt: "2018-05-02T16:55:13.322Z",
  updatedAt: "2018-05-02T16:55:13.322Z",
  CanonicalItem: {
    name: "Apple Mac Book Pro 13 Touchbar",
    icon: "macbook"
  }
};
storiesOf("Elements/Item", module).add("article", () => <Item item={item} />);

/***** Stories of ProgressBar*****/
const progressStories = storiesOf("Elements/Progress", module);
progressStories.addDecorator(withKnobs);

progressStories
  .add("...progress", () => (
    <ProgressBar
      progressBarCurrent={item.delimiter}
      progressBarMax={item.goal}
    />
  ))
  .add("100%", () => (
    <ProgressBar className="" progressBarCurrent="100" progressBarMax="100" />
  ));
