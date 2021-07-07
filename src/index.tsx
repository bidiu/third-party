import { extend } from '@archon/showroom-extensions';
import { render } from '@remote-ui/react';
import React from 'react';
import { Banner } from './banner';

extend('ui.banner', root => {
  render(<Banner text="Your home office." />, root);
  root.mount()
})
