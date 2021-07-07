import { Button, Div, extend, Image } from "@archon/showroom-extensions"
import { render } from "@remote-ui/react"
import React from "react"
import bannerImage from './banner.jpg'

extend('showroom.welcome', (root, args) => {
  console.log(JSON.stringify(bannerImage))
  render(
    <Div>
      <Image src={bannerImage} style={{ width: '50%' }} />
    </Div>, 
    root,
  )
  root.mount()
})


extend('ui.banner', root => {
  render(
    <Button style={{ backgroundColor: 'orange' }}>Hello, world</Button>, 
    root,
  )
  root.mount()
})
