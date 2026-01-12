import PlayerContainer from '.';

import { trackMock } from '@/mocks/tracks';

import StoreProvider from '@/redux/StoreProvider';

import type { Meta, StoryObj } from '@storybook/nextjs';
import type { PlayerState } from '@/types/player';
import type { UserState } from '@/types/user';

type Story = StoryObj<typeof PlayerContainer>;

const meta: Meta<typeof PlayerContainer> = {
	title: 'Player/PlayerContainer',
	component: PlayerContainer,
	args: {
		onClose: () => {},
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
							is_playing: false,
							repeat_state: 'off',
							item: trackMock,
							progress_ms: 140000,
							device: { is_active: true, name: "James's iPhone" },
						},
					} as unknown as PlayerState,
					user: {
						product: 'premium',
					} as unknown as UserState,
				}}
			>
				<div className="hidden lg:block">
					<Story />
				</div>
			</StoreProvider>
		),
	],
};

export default meta;

export const Default: Story = {};

export const External: Story = {
	decorators: [
		(Story) => (
			<StoreProvider
				preloadedState={{
					player: {
						playbackState: {
							deviceId: 'local-device-id',
							is_playing: false,
							repeat_state: 'off',
							item: trackMock,
							progress_ms: 140000,
							device: {
								id: 'external-device-id',
								is_active: true,
								name: "James's iPhone",
							},
						},
					} as unknown as PlayerState,
					user: {
						product: 'premium',
					} as unknown as UserState,
				}}
			>
				<div className="hidden lg:block">
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
							is_playing: false,
							repeat_state: 'off',
							item: trackMock,
							progress_ms: 140000,
							device: {
								id: 'external-device-id',
								is_active: true,
								name: "James's iPhone",
							},
						},
					} as unknown as PlayerState,
					user: {
						product: 'free',
					} as unknown as UserState,
				}}
			>
				<div className="hidden lg:block">
					<Story />
				</div>
			</StoreProvider>
		),
	],
};
