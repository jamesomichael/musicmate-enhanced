import ExplicitBadge from '.';

import StoreProvider from '@/redux/StoreProvider';

import type { Meta, StoryObj } from '@storybook/nextjs';

type Story = StoryObj<typeof ExplicitBadge>;

const meta: Meta<typeof ExplicitBadge> = {
	title: 'Tracklist/ExplicitBadge',
	component: ExplicitBadge,
	args: {},
	parameters: {
		layout: 'centered',
		nextjs: {
			appDirectory: true,
			router: {
				basePath: '/',
			},
		},
	},
	decorators: [
		(Story) => (
			<StoreProvider>
				<Story />
			</StoreProvider>
		),
	],
};
export default meta;

export const Default: Story = {};
