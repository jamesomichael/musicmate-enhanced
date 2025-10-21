import MenuItem from '.';

import { TbExternalLink } from 'react-icons/tb';

import StoreProvider from '@/redux/StoreProvider';

import type { Meta, StoryObj } from '@storybook/nextjs';

type Story = StoryObj<typeof MenuItem>;

const meta: Meta<typeof MenuItem> = {
	title: 'Navbar/AccountMenu/MenuItem',
	component: MenuItem,
	args: {
		label: 'Account',
	},
	parameters: {
		layout: 'centered',
	},
	decorators: [
		(Story) => (
			<StoreProvider>
				<div className="w-44 h-12">
					<Story />
				</div>
			</StoreProvider>
		),
	],
};

export default meta;

export const Default: Story = {};

export const WithIcon: Story = {
	args: {
		href: '/',
		Icon: TbExternalLink,
	},
};
