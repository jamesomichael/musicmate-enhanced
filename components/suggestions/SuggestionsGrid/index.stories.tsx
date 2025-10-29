import SuggestionsGrid from '.';

import { albumMock } from '@/mocks/albums';

import StoreProvider from '@/redux/StoreProvider';

import type { Meta, StoryObj } from '@storybook/nextjs';
import type { LibraryState } from '@/types/library';

type Story = StoryObj<typeof SuggestionsGrid>;

const mockAlbums = Array.from({ length: 8 }, () => ({
	album: albumMock,
	added_at: '2025-11-01',
}));

const meta: Meta<typeof SuggestionsGrid> = {
	title: 'Suggestions/SuggestionsGrid',
	component: SuggestionsGrid,
	args: {},
	parameters: {
		layout: 'fullscreen',
	},
	decorators: [
		(Story) => (
			<StoreProvider
				preloadedState={{
					library: {
						albums: {
							items: mockAlbums,
						},
					} as unknown as LibraryState,
				}}
			>
				<Story />
			</StoreProvider>
		),
	],
};
export default meta;

export const Default: Story = {};
