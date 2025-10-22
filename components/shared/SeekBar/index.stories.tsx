import { useState } from 'react';

import SeekBar from '.';

import type { Meta, StoryObj } from '@storybook/nextjs';

type Story = StoryObj<typeof SeekBar>;

const meta: Meta<typeof SeekBar> = {
	title: 'Shared/SeekBar',
	component: SeekBar,
	args: {
		height: 10,
		fullWidth: true,
		duration: 1000,
		position: 5,
	},
	parameters: {
		layout: 'fullscreen',
	},
	decorators: [(Story) => <Story />],
};
export default meta;

export const Default: Story = {
	render: (args) => {
		const [position, setPosition] = useState(500);
		return (
			<SeekBar
				{...args}
				position={position}
				onSeek={(number) => setPosition(number)}
			/>
		);
	},
};
