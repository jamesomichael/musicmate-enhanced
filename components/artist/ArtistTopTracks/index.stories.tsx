import ArtistTopTracks from '.';

import { artistTopTracksMock } from '@/mocks/artists';

import StoreProvider from '@/redux/StoreProvider';

import type { Meta, StoryObj } from '@storybook/nextjs';
import type { SpotifyTrack } from '@/types/spotify';

type Story = StoryObj<typeof ArtistTopTracks>;

const meta: Meta<typeof ArtistTopTracks> = {
	title: 'Artist/ArtistTopTracks',
	component: ArtistTopTracks,
	args: {
		tracks: artistTopTracksMock.tracks as unknown as SpotifyTrack[],
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

export const Fullscreen: Story = {
	parameters: { layout: 'fullscreen' },
};
