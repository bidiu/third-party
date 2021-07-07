import React from 'react'

(self as any).onRender((root: any) => {
  const jsx = <div>Hello, world</div>
  const button = root.createComponent('Button', {
    onPress() {
      console.log('Pressed!' + JSON.stringify(jsx));
    },
  });
  button.appendChild('Click me');

  root.appendChild(button);
  root.mount();
});
