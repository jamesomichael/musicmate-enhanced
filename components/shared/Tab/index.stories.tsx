import Tab from '.';

import type { Meta, StoryObj } from '@storybook/nextjs';

type Story = StoryObj<typeof Tab>;

const meta: Meta<typeof Tab> = {
	title: 'Shared/Tab',
	component: Tab,
	args: {
		label: 'Artists',
	},
	parameters: {
		layout: 'centered',
	},
	decorators: [(Story) => <Story />],
};
export default meta;

export const Default: Story = {};

export const Active: Story = {
	args: {
		isActive: true,
	},
};
