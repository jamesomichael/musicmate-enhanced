import SearchBar from '.';

import StoreProvider from '@/redux/StoreProvider';

import type { Meta, StoryObj } from '@storybook/nextjs';

type Story = StoryObj<typeof SearchBar>;

const meta: Meta<typeof SearchBar> = {
	title: 'Search/SearchBar',
	component: SearchBar,
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
				<div className="h-14">
					<Story />
				</div>
			</StoreProvider>
		),
	],
};
export default meta;

export const Default: Story = {};
