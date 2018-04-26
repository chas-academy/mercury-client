import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { action, decorateAction,configureActions } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs/react";
import { withNotes } from "@storybook/addon-notes";
import LinkTo from "@storybook/addon-links/react";

import "../assets/styles/style.css";

import {
  Button,
  Input,
  ProgressBar,
  GlobalNav,
  LinkList,
  Item,
  Icon
} from "../components";

/***** Stories of Button *****/
action("clicked");
action("triggered");
const buttonStories = storiesOf("Elements/Button", module);

buttonStories
  .addDecorator(withKnobs)
  .add("No props is passed", () => <Button>button</Button>)
  .add("No children", () => (
    <Button color="secondary" onClick={action("trigger-an-event")} />
  ))
  .add("button w. icon", () => (
    <Button onClick={action("clicked")}>
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
  .add("text", () => <Input type="text" />)
  .add("date", () => <Input type="date" />)
  .add("number", () => <Input type="number" />);


/***** Stories of ProgressBar*****/
const progressStories = storiesOf("Elements/Progress", module);
progressStories.addDecorator(withKnobs);

progressStories
  .add("0%", () => <ProgressBar progressBarCurrent="0" progressBarMax="100" />)
  .add("30%", () => (
    <ProgressBar progressBarCurrent="30" progressBarMax="100" />
  ))
  .add("60%", () => (
    <ProgressBar progressBarCurrent="60" progressBarMax="100" />
  ))
  .add("100%", () => (
    <ProgressBar progressBarCurrent="100" progressBarMax="100" />
  ));


/***** Stories of Icon *****/
storiesOf("Elements/Icon", module)
  .add("home, default size - small", () => <Icon icon="home" color="#5e515a" />)
  .add("plus - medium", () => (
    <Icon icon="plus" color="#d9b1b1" size="medium" />
  ))
  .add("cog - large", () => <Icon icon="cog" color="orange" size="large" />)
  .add("rocket, no color provided", () => <Icon icon="rocket" size="xlarge" />);


/***** Stories of Item *****/
/* Needs fixin
storiesOf("Elements/Item", module).add("text", () => (
  <Item item={item}/>
)); */