import CollectionControls from '.';

import StoreProvider from '@/redux/StoreProvider';

import type { Meta, StoryObj } from '@storybook/nextjs';

type Story = StoryObj<typeof CollectionControls>;

const meta: Meta<typeof CollectionControls> = {
	title: 'Collection/CollectionControls',
	component: CollectionControls,
	args: {
		contextUri: 'test-context-uri',
	},
	parameters: {
		layout: 'centered',
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
