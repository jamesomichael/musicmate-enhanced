import DiscographyCard from '.';

import StoreProvider from '@/redux/StoreProvider';

import type { Meta, StoryObj } from '@storybook/nextjs';
import type { SpotifyArtist } from '@/types/spotify';

type Story = StoryObj<typeof DiscographyCard>;

const meta: Meta<typeof DiscographyCard> = {
	title: 'Artist/DiscographyCard',
	component: DiscographyCard,
	args: {
		id: 'test-id',
		type: 'album',
		name: 'Blue Weekend (Tour Deluxe)',
		imageUrl:
			'https://i.scdn.co/image/ab67616d0000b273191c657cb660f9023f9b45bb',
		artists: [
			{
				name: 'Wolf Alice',
			},
		] as SpotifyArtist[],
		releaseDate: '2021',
	},
	parameters: {
		layout: 'centered',
	},
	decorators: [
		(Story) => (
			<StoreProvider>
				<div className="w-60 h-fit">
					<Story />
				</div>
			</StoreProvider>
		),
	],
};
export default meta;

export const Default: Story = {};

export const NoAlbumArt: Story = {
	args: {
		imageUrl: undefined,
	},
};

export const ArtistPage: Story = {
	args: {
		artists: undefined,
	},
};
