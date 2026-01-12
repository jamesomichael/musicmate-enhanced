import MobilePlayer from '.';

import { trackMock } from '@/mocks/tracks';

import StoreProvider from '@/redux/StoreProvider';

import type { Meta, StoryObj } from '@storybook/nextjs';
import type { PlayerState } from '@/types/player';
import type { UserState } from '@/types/user';

type Story = StoryObj<typeof MobilePlayer>;

const meta: Meta<typeof MobilePlayer> = {
	title: 'Player/MobilePlayer',
	component: MobilePlayer,
	args: {
		onClose: () => {},
	},
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
							repeat_state: 'off',
							progress_ms: 140000,
							device: { name: "James's iPhone" },
						},
					} as unknown as PlayerState,
					user: {
						product: 'premium',
					} as unknown as UserState,
				}}
			>
				<div className="w-screen overflow-hidden">
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
							repeat_state: 'off',
							item: trackMock,
							progress_ms: 140000,
							device: { name: "James's iPhone" },
						},
					} as unknown as PlayerState,
					user: {
						product: 'premium',
					} as unknown as UserState,
				}}
			>
				<div className="w-screen overflow-hidden">
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
							repeat_state: 'off',
							item: trackMock,
							progress_ms: 140000,
							device: { name: "James's iPhone" },
						},
					} as unknown as PlayerState,
					user: {
						product: 'premium',
					} as unknown as UserState,
				}}
			>
				<div className="w-screen overflow-hidden">
					<Story />
				</div>
			</StoreProvider>
		),
	],
};

export const WithShuffle: Story = {
	decorators: [
		(Story) => (
			<StoreProvider
				preloadedState={{
					player: {
						playbackState: {
							is_playing: true,
							shuffle_state: true,
							repeat_state: 'off',
							item: trackMock,
							progress_ms: 140000,
							device: { name: "James's iPhone" },
						},
					} as unknown as PlayerState,
					user: {
						product: 'premium',
					} as unknown as UserState,
				}}
			>
				<div className="w-screen overflow-hidden">
					<Story />
				</div>
			</StoreProvider>
		),
	],
};

export const WithRepeatAll: Story = {
	decorators: [
		(Story) => (
			<StoreProvider
				preloadedState={{
					player: {
						playbackState: {
							is_playing: true,
							shuffle_state: true,
							repeat_state: 'context',
							item: trackMock,
							progress_ms: 140000,
							device: { name: "James's iPhone" },
						},
					} as unknown as PlayerState,
					user: {
						product: 'premium',
					} as unknown as UserState,
				}}
			>
				<div className="w-screen overflow-hidden">
					<Story />
				</div>
			</StoreProvider>
		),
	],
};

export const WithRepeatOne: Story = {
	decorators: [
		(Story) => (
			<StoreProvider
				preloadedState={{
					player: {
						playbackState: {
							is_playing: true,
							shuffle_state: true,
							repeat_state: 'track',
							item: trackMock,
							progress_ms: 140000,
							device: { name: "James's iPhone" },
						},
					} as unknown as PlayerState,
					user: {
						product: 'premium',
					} as unknown as UserState,
				}}
			>
				<div className="w-screen overflow-hidden">
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
						playbackState: {
							deviceId: 'local-device-id',
							is_playing: true,
							shuffle_state: true,
							repeat_state: 'track',
							item: trackMock,
							progress_ms: 140000,
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
				<div className="w-screen overflow-hidden">
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
						playbackState: {
							deviceId: 'local-device-id',
							is_playing: true,
							shuffle_state: true,
							repeat_state: 'track',
							item: trackMock,
							progress_ms: 140000,
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
				<div className="w-screen overflow-hidden">
					<Story />
				</div>
			</StoreProvider>
		),
	],
};
