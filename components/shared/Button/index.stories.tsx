import Button from '.';

import type { Meta, StoryObj } from '@storybook/nextjs';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
	title: 'Shared/Button',
	component: Button,
	args: {
		text: 'Test',
		onClick: () => {},
	},
	parameters: {
		layout: 'centered',
	},
	decorators: [(Story) => <Story />],
};
export default meta;

export const Default: Story = {};

export const Primary: Story = {
	args: {
		isPrimary: true,
	},
};
