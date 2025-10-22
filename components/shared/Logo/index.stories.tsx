import Logo from '.';

import type { Meta, StoryObj } from '@storybook/nextjs';

type Story = StoryObj<typeof Logo>;

const meta: Meta<typeof Logo> = {
	title: 'Shared/Logo',
	component: Logo,
	args: {},
	parameters: {
		layout: 'centered',
	},
	decorators: [(Story) => <Story />],
};
export default meta;

export const Default: Story = {};

export const Light: Story = {
	args: { light: true },
};

export const Dark: Story = {
	args: { dark: true },
};
