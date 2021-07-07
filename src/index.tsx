import { Button, onRender } from "@archon/showroom-extensions";
import { render } from "@remote-ui/react";
import React from "react";

onRender(root => {
  render(
    <Button style={{ backgroundColor: 'orange' }} onPress={() => console.log("Button was pressed!")}>Hello, world</Button>, 
    root,
  )
  root.mount()
})
