import ExternalDeviceIndicator from '.';

import StoreProvider from '@/redux/StoreProvider';

import type { Meta, StoryObj } from '@storybook/nextjs';
import type { PlayerState } from '@/types/player';

type Story = StoryObj<typeof ExternalDeviceIndicator>;

const meta: Meta<typeof ExternalDeviceIndicator> = {
	title: 'Player/ExternalDeviceIndicator',
	component: ExternalDeviceIndicator,
	args: {},
	parameters: {
		layout: 'fullscreen',
	},
	decorators: [
		(Story) => (
			<StoreProvider
				preloadedState={{
					player: {
						playbackState: { device: { name: "James's iPhone" } },
					} as unknown as PlayerState,
				}}
			>
				<Story />
			</StoreProvider>
		),
	],
};

export default meta;

export const Default: Story = {};
