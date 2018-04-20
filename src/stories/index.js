import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs/react";

import withTests from "./withTests";
/* Global CSS */
import "../assets/styles/style.css";

import { Button, Input, Item } from "../components";

/***** Stories of Button component *****/
action("trigger-an-event-perhaps");

const knobStoriesButton = storiesOf("Elements/Button", module);
knobStoriesButton.addDecorator(withKnobs);

knobStoriesButton.add("disable/enable", () => (
  <Button color="primary" disabled={boolean("Disabled", true)}>
    {text("Label", "Write what you want!")}
  </Button>
));

storiesOf("Elements/Button", module)
  .add("default", () => <Button color="w">Info</Button>)
  .add("primary", () => <Button color="primary">Primary</Button>)
  .add("hovered", () => <Button color="secondary">Secondary</Button>)
  .add("active", () => <Button color="default">Default</Button>);

storiesOf("Elements/Button/with actions", module).add("simple trigger", () => (
  <Button color="primary" onClick={action("trigger-an-event-perhaps")}>
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

  storiesOf("Elements/Item", module)
  .add("text", () => <Item ItemId="1" ItemTitle="Titel" />)
