import SuggestionItem from '.';

import { albumMock } from '@/mocks/albums';

import StoreProvider from '@/redux/StoreProvider';

import type { Meta, StoryObj } from '@storybook/nextjs';

type Story = StoryObj<typeof SuggestionItem>;

const meta: Meta<typeof SuggestionItem> = {
	title: 'Suggestions/SuggestionItem',
	component: SuggestionItem,
	args: {
		id: albumMock.id,
		imageUrl: albumMock.images[0].url,
		name: albumMock.name,
	},
	parameters: {
		layout: 'centered',
	},
	decorators: [
		(Story) => (
			<StoreProvider>
				<div className="w-72">
					<Story />
				</div>
			</StoreProvider>
		),
	],
};
export default meta;

export const Default: Story = {};
