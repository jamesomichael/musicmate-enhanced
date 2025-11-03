import SearchBar from '.';

import StoreProvider from '@/redux/StoreProvider';

import type { Meta, StoryObj } from '@storybook/nextjs';

type Story = StoryObj<typeof SearchBar>;

const meta: Meta<typeof SearchBar> = {
	title: 'Search/SearchBar',
	component: SearchBar,
	args: {},
	parameters: {
		layout: 'fullscreen',
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
				<div className="px-4 py-1.5 lg:p-1.5 h-14 flex justify-center items-center">
					<Story />
				</div>
			</StoreProvider>
		),
	],
};
export default meta;

export const Default: Story = {};
