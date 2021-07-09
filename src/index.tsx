import { extend } from '@archon/showroom-extensions';
import { render } from '@remote-ui/react';
import React from 'react';
import { Banner } from './banner';
import ProductRecommendations from './product_recommendations';

extend('ui.banner', root => {
  render(<Banner text="Your home office." />, root, () => root.mount())
})

extend('ui.cart.items.bottom', root => {
  render(<ProductRecommendations />, root, () => root.mount())
})
