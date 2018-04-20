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
action("trigger-an-event-perhaps");

const buttonStories = storiesOf("Elements/Button", module);
buttonStories.addDecorator(withKnobs);

buttonStories
  .add("disable/enable", () => (
    <Button color="primary" disabled={boolean("Disabled", true)}>
      {text("Label", "Write what you want!")}
    </Button>
  ))
  .add(
    "primary",
    withNotes("'Cool' is defined by it's label attribute")(() => (
      <Button color="primary" label="Cool" />
    ))
  )
  .add(
    "secondary",
    withNotes("No label attr or children provided")(() => (
      <Button color="secondary" />
    ))
  )
  .add("info", () => <Button color="info" label="some aria-label" />)
  .add("warning", () => <Button color="warning" label="warning" />)

  .add("trigger action", () => (
    <Button color="secondary" onClick={action("trigger-an-action-perhaps")}>
      Click me!
    </Button>
  ));

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
  .add("0", () => <Progress />)
  .add("30", () => <Progress value="30" />)
  .add("60", () => <Progress value="60" />)
  .add("100", () => <Progress value="100" />);

/***** Stories of Icon component *****/
storiesOf("Elements/Icon", module)
  .add("home", () => <Icon icon="home" color="lavender" />)
  .add("plus", () => <Icon icon="plus" color="pink" />)
  .add("cog", () => <Icon icon="cog" color="orange" transform="scale(1)" />)
  .add("rocket", () => (
    <Icon icon="rocket" color="aquamarine" width="30" transform="scale(1)" />
  ));
