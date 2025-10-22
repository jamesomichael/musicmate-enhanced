import FeaturedItem from '.';

import { albumMock } from '@/mocks/albums';

import StoreProvider from '@/redux/StoreProvider';

import type { Meta, StoryObj } from '@storybook/nextjs';
import type { SpotifyAlbum } from '@/types/spotify';

type Story = StoryObj<typeof FeaturedItem>;

const meta: Meta<typeof FeaturedItem> = {
	title: 'Artist/FeaturedItem',
	component: FeaturedItem,
	args: {
		item: albumMock as unknown as SpotifyAlbum,
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
