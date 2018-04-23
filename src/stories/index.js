import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs/react";
import { withNotes } from "@storybook/addon-notes";

import withTests from "./withTests";
import "../assets/styles/style.css";

import {
  Button,
  Input,
  Progress,
  GlobalNav,
  LinkList,
  Item,
  Icon
} from "../components";

/***** Stories of Button component *****/

const buttonStories = storiesOf("Elements/Button", module);
buttonStories.addDecorator(withKnobs);
action("trigger-an-event-perhaps");

buttonStories
  .add(
    "No props is passed",
    withNotes("No props is passed")(() => <Button>button</Button>)
  )
  .add(
    "No children",
    withNotes(
      "No children provided, only passing color = secondary, which adds the class secondary"
    )(() => <Button color="secondary" onClick={action("trigger-an-event")} />)
  )
  .add("button w. icon", () => (
    <Button onClick={action("trigger-an-event")}>
      <Icon icon="rocket" color="pink" />
    </Button>
  ))
  .add("disable/enable", () => (
    <Button
      color="primary"
      disabled={boolean("Disabled", true)}
      onClick={action("trigger-an-event")}
    >
      {text("Label", "Write what you want!")}
    </Button>
  ))
  .add(
    "w. icon and text",
    withNotes("")(() => (
      <Button color="secondary" onClick={action("trigger-an-event")}>
        <Icon icon="rocket" color="var(--light)" />
        <span>rocket</span>
      </Button>
    ))
  );

/***** Stories of Input component *****/
storiesOf("Elements/Input", module)
  .add("text", () => <Input type="text" />)
  .add("date", () => <Input type="date" />)
  .add("number", () => <Input type="number" />)
  .add("radio", () => <Input type="radio" />)
  .add("checkbox", () => <Input type="checkbox" />);

storiesOf("Elements/Item", module).add("text", () => (
  <Item ItemId="1" ItemTitle="Titel" />
));

/***** Stories of Progress component *****/

const progressStories = storiesOf("Elements/Progress", module);
progressStories.addDecorator(withKnobs);

progressStories
  .add("0%", () => <Progress />)
  .add("30%", () => <Progress value="30" />)
  .add("60%", () => <Progress value="60" />)
  .add("100%", () => <Progress value="100" />);

storiesOf("Elements/Icon", module)
  .add("home, default size - small", () => <Icon icon="home" color="#5e515a" />)
  .add("plus - medium", () => (
    <Icon icon="plus" color="#d9b1b1" size="medium" />
  ))
  .add("cog - large", () => <Icon icon="cog" color="orange" size="large" />)
  .add("rocket, no color provided", () => <Icon icon="rocket" size="xlarge" />);
