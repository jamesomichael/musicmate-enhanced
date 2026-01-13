import TabBar from '.';

import StoreProvider from '@/redux/StoreProvider';

import type { Meta, StoryObj } from '@storybook/nextjs';

type Story = StoryObj<typeof TabBar>;

const meta: Meta<typeof TabBar> = {
	title: 'TabBar/TabBar',
	component: TabBar,
	args: {},
	globals: {
		viewport: { value: 'iphone14promax', isRotated: false },
	},
	parameters: {
		layout: 'fullscreen',
	},
	decorators: [
		(Story) => (
			<StoreProvider>
				<div className="absolute bottom-0 w-full h-20 pb-[env(safe-area-inset-bottom)] overflow-hidden">
					<Story />
				</div>
			</StoreProvider>
		),
	],
};

export default meta;

export const Default: Story = {};
