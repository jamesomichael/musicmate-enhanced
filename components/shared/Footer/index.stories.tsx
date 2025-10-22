import Footer from '.';

import type { Meta, StoryObj } from '@storybook/nextjs';

type Story = StoryObj<typeof Footer>;

const meta: Meta<typeof Footer> = {
	title: 'Shared/Footer',
	component: Footer,
	args: {},
	parameters: {
		layout: 'centered',
	},
	decorators: [(Story) => <Story />],
};
export default meta;

export const Default: Story = {};
