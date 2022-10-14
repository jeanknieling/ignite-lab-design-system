import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '../Button/Button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Create account',
  },
  /* argTypes: {} */ // Comentei pois essa configuração já estava funcionando
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};
