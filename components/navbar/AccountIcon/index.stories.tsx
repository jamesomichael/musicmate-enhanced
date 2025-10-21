import AccountIcon from '.';

import StoreProvider from '@/redux/StoreProvider';

import type { Meta, StoryObj } from '@storybook/nextjs';
import type { UserState } from '@/types/user';

type Story = StoryObj<typeof AccountIcon>;

const meta: Meta<typeof AccountIcon> = {
	title: 'Navbar/AccountIcon',
	component: AccountIcon,
	args: {
		contextUri: 'test-context-uri',
	},
	parameters: {
		layout: 'centered',
	},
	decorators: [
		(Story) => (
			<StoreProvider
				preloadedState={{
					user: {
						displayName: 'James',
					} as unknown as UserState,
				}}
			>
				<div className="h-11">
					<Story />
				</div>
			</StoreProvider>
		),
	],
};
export default meta;

export const Default: Story = {};
