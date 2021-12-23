import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button as Component } from './Button';

export default {
  title: 'Example/Button',
  component: Component,
} as ComponentMeta<typeof Component>;

export const Button: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);
Button.args = {
  primary: true,
  children: 'Button',
};
