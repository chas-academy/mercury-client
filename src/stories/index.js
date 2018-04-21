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
<<<<<<< d0fa2c086d9b9a438aa3ed873e1e9b95cc96a6e5
  .add("warning", () => <Button color="warning" label="warning" />)

  .add("trigger action", () => (
    <Button color="secondary" onClick={action("trigger-an-action-perhaps")}>
      Click me!
    </Button>
  ));
=======
  .add("warning", () => (
    <Button color="light">
      <Icon icon="rocket" color="aquamarine" />
    </Button>
  ));

storiesOf("Elements/Button", module)
  .add(
    "default",
    withNotes("A very simple component")(() => (
      <Button color="info">Info</Button>
    ))
  )
  .add("cool", () => <Button color="primary">Primary</Button>)
  .add("hovered", () => <Button color="secondary">Secondary</Button>)
  .add("active", () => <Button color="default">Default</Button>);

storiesOf("Elements/Button/with actions", module).add("simple trigger", () => (
  <Button color="primary" onClick={action("trigger-an-event-perhaps")}>
    Click me!
  </Button>
));
>>>>>>> Add sizing option and set width/height at <path> instead of <svg> for correct scaling

/***** Stories of Input component *****/
storiesOf("Elements/Input", module)
  .add("text", () => <Input type="text" />)
  .add("date", () => <Input type="date" />)
  .add("number", () => <Input type="number" />)
  .add("radio", () => <Input type="radio" />)
  .add("checkbox", () => <Input type="checkbox" />);

<<<<<<< d0fa2c086d9b9a438aa3ed873e1e9b95cc96a6e5
storiesOf("Elements/Item", module).add("text", () => (
  <Item ItemId="1" ItemTitle="Titel" />
));

=======
>>>>>>> Add sizing option and set width/height at <path> instead of <svg> for correct scaling
/***** Stories of Progress component *****/

const progressStories = storiesOf("Elements/Progress", module);
progressStories.addDecorator(withKnobs);

progressStories
<<<<<<< d0fa2c086d9b9a438aa3ed873e1e9b95cc96a6e5
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
=======
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
  .add("rocket, no color provided", () => <Icon icon="rocket" size="large" />);
>>>>>>> Add sizing option and set width/height at <path> instead of <svg> for correct scaling
