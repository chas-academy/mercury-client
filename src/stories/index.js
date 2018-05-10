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

import {
  Button,
  Input,
  ProgressBar,
  GlobalNav,
  LinkList,
  Items,
  Item,
  StepBar,
  Icon,
  ItemData
} from "../components";

/***** Stories of Button *****/
action("clicked");
action("triggered");
const buttonStories = storiesOf("Elements/Button", module);

buttonStories
  .addDecorator(withKnobs)
  .add("shape='box'", () => (
    <Button shape="box" onClick={action("trigger-an-event")}>
      button
    </Button>
  ))
  .add("round button w. icon + color grey", () => (
    <Button color="grey" shape="round" onClick={action("clicked")}>
      <Icon icon="rocket" />
    </Button>
  ))
  .add("disable/enable", () => (
    <Button
      color="primary"
      disabled={boolean("Disabled", true)}
      onClick={action("triggered")}
    >
      {text("Label", "Save")}
    </Button>
  ))
  .add("w. icon and text", () => (
    <Button onClick={action("triggered")}>
      <Icon icon="cog" />
      <span>edit</span>
    </Button>
  ));

/***** Stories of Input *****/
storiesOf("Elements/Input", module)
  .add("underlined text", () => (
    <Input type="text" placeholder="write here, plz!" />
  ))
  .add("classic", () => <Input type="text" variant="classic" />)
  .add("date", () => <Input type="date" />)
  .add("number", () => <Input type="number" />);

/***** Stories of Icon *****/
storiesOf("Elements/Icon", module)
  .add("home, default size - small", () => <Icon icon="home" />)
  .add("plus - medium", () => <Icon icon="plus" size="medium" />)
  .add("cog - large", () => <Icon icon="cog" size="large" />)
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
const items = [
  {
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
  }
];

storiesOf("Elements/Item", module).add("article", () => <Item item={item} />);
storiesOf("Elements/Items", module).add("articles", () => (
  <Items items={items} />
));

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
