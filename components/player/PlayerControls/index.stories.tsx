import PlayerControls from '.';

import { trackMock } from '@/mocks/tracks';

import StoreProvider from '@/redux/StoreProvider';

import type { Meta, StoryObj } from '@storybook/nextjs';
import type { PlayerState } from '@/types/player';

type Story = StoryObj<typeof PlayerControls>;

const meta: Meta<typeof PlayerControls> = {
	title: 'Player/PlayerControls',
	component: PlayerControls,
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
				}}
			>
				<div className="px-4">
					<Story />
				</div>
			</StoreProvider>
		),
	],
};

export default meta;

export const Default: Story = {};
