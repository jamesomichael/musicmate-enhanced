import MiniPlayer from '.';

import { trackMock } from '@/mocks/tracks';

import StoreProvider from '@/redux/StoreProvider';

import type { Meta, StoryObj } from '@storybook/nextjs';
import type { PlayerState } from '@/types/player';
import type { UserState } from '@/types/user';

type Story = StoryObj<typeof MiniPlayer>;

const meta: Meta<typeof MiniPlayer> = {
	title: 'Player/MiniPlayer',
	component: MiniPlayer,
	args: {},
	globals: {
		viewport: { value: 'iphone14promax', isRotated: false },
	},
	parameters: {
		layout: 'fullscreen',
	},
	decorators: [
		(Story) => (
			<StoreProvider
				preloadedState={{
					player: {
						playbackState: {
							item: trackMock,
							device: { name: "James's iPhone" },
						},
					} as unknown as PlayerState,
					user: {
						product: 'premium',
					} as unknown as UserState,
				}}
			>
				<div className="w-screen">
					<Story />
				</div>
			</StoreProvider>
		),
	],
};

export default meta;

export const Default: Story = {};

export const Playing: Story = {
	decorators: [
		(Story) => (
			<StoreProvider
				preloadedState={{
					player: {
						playbackState: {
							is_playing: true,
							item: trackMock,
							device: { name: "James's iPhone" },
						},
					} as unknown as PlayerState,
					user: {
						product: 'premium',
					} as unknown as UserState,
				}}
			>
				<div className="w-screen">
					<Story />
				</div>
			</StoreProvider>
		),
	],
};

export const Paused: Story = {
	decorators: [
		(Story) => (
			<StoreProvider
				preloadedState={{
					player: {
						playbackState: {
							is_playing: false,
							item: trackMock,
							device: { name: "James's iPhone" },
						},
					} as unknown as PlayerState,
					user: {
						product: 'premium',
					} as unknown as UserState,
				}}
			>
				<div className="w-screen">
					<Story />
				</div>
			</StoreProvider>
		),
	],
};

export const External: Story = {
	decorators: [
		(Story) => (
			<StoreProvider
				preloadedState={{
					player: {
						deviceId: 'local-device-id',
						playbackState: {
							is_playing: false,
							item: trackMock,
							device: {
								id: 'external-device-id',
								name: "James's iPhone",
							},
						},
					} as unknown as PlayerState,
					user: {
						product: 'premium',
					} as unknown as UserState,
				}}
			>
				<div className="w-screen">
					<Story />
				</div>
			</StoreProvider>
		),
	],
};

export const NotPremium: Story = {
	decorators: [
		(Story) => (
			<StoreProvider
				preloadedState={{
					player: {
						deviceId: 'local-device-id',
						playbackState: {
							is_playing: false,
							item: trackMock,
							device: {
								id: 'external-device-id',
								name: "James's iPhone",
							},
						},
					} as unknown as PlayerState,
					user: {
						product: 'free',
					} as unknown as UserState,
				}}
			>
				<div className="w-screen">
					<Story />
				</div>
			</StoreProvider>
		),
	],
};
