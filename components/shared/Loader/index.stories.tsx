import Loader from '.';

import type { Meta, StoryObj } from '@storybook/nextjs';

type Story = StoryObj<typeof Loader>;

const meta: Meta<typeof Loader> = {
	title: 'Shared/Loader',
	component: Loader,
	args: {},
	parameters: {
		layout: 'centered',
	},
	decorators: [(Story) => <Story />],
};
export default meta;

export const Default: Story = {};
