import NowPlaying from '.';

import { trackMock } from '@/mocks/tracks';

import StoreProvider from '@/redux/StoreProvider';

import type { Meta, StoryObj } from '@storybook/nextjs';
import type { PlayerState } from '@/types/player';

type Story = StoryObj<typeof NowPlaying>;

const meta: Meta<typeof NowPlaying> = {
	title: 'Player/NowPlaying',
	component: NowPlaying,
	args: {},
	parameters: {
		layout: 'centered',
	},
	decorators: [
		(Story) => (
			<StoreProvider
				preloadedState={{
					player: {
						playbackState: {
							is_playing: true,
							item: trackMock,
							device: { is_active: true },
						},
					} as unknown as PlayerState,
				}}
			>
				<div className="h-20 flex">
					<Story />
				</div>
			</StoreProvider>
		),
	],
};

export default meta;

export const Default: Story = {};

export const Podcast: Story = {
	decorators: [
		(Story) => (
			<StoreProvider
				preloadedState={{
					player: {
						playbackState: {
							is_playing: true,
							currently_playing_type: 'episode',
							device: { is_active: true },
						},
					} as unknown as PlayerState,
				}}
			>
				<div className="h-20 flex">
					<Story />
				</div>
			</StoreProvider>
		),
	],
};

export const PrivateSession: Story = {
	decorators: [
		(Story) => (
			<StoreProvider
				preloadedState={{
					player: {
						playbackState: {
							is_playing: true,
							device: {
								is_active: true,
								is_private_session: true,
							},
						},
					} as unknown as PlayerState,
				}}
			>
				<div className="h-20 flex">
					<Story />
				</div>
			</StoreProvider>
		),
	],
};
