import AlbumHeader from '.';

import StoreProvider from '@/redux/StoreProvider';

import type { Meta, StoryObj } from '@storybook/nextjs';
import type { SpotifyArtist } from '@/types/spotify';

type Story = StoryObj<typeof AlbumHeader>;

const meta: Meta<typeof AlbumHeader> = {
	title: 'Album/AlbumHeader',
	component: AlbumHeader,
	args: {
		imageUrl:
			'https://i.scdn.co/image/ab67616d0000b27302e1a7156bfc074cc8d1b94c',
		type: 'album',
		name: 'Romance (Deluxe Edition)',
		releaseDate: '2025-04-16',
		contextUri: 'test-context-uri',
		totalTracks: 14,
		artists: [
			{
				id: 'test-id',
				name: 'Fontaines D.C.',
				type: 'artist',
				uri: 'test-uri',
			},
		] as SpotifyArtist[],
	},
	parameters: {
		layout: 'fullscreen',
	},
	decorators: [
		(Story) => (
			<StoreProvider>
				<div className="w-screen">
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
