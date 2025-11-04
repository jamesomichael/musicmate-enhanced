import MobilePlayerContainer from '.';

import { trackMock } from '@/mocks/tracks';

import StoreProvider from '@/redux/StoreProvider';

import type { Meta, StoryObj } from '@storybook/nextjs';
import type { PlayerState } from '@/types/player';

type Story = StoryObj<typeof MobilePlayerContainer>;

const meta: Meta<typeof MobilePlayerContainer> = {
	title: 'Player/MobilePlayerContainer',
	component: MobilePlayerContainer,
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
							is_playing: true,
							repeat_state: 'off',
							item: trackMock,
							progress_ms: 140000,
							device: { name: "James's iPhone" },
						},
					} as unknown as PlayerState,
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
