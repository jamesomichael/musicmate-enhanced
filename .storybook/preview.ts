import '../app/globals.css';

import { usePathname } from '@storybook/nextjs/navigation.mock';
import mockRouter from 'next-router-mock';

import type { Preview } from '@storybook/nextjs';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: { expanded: true },
};

const preview: Preview = {
	parameters: {
		backgrounds: {
			options: {
				dark: { name: 'Dark', value: '#121212' },
			},
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	beforeEach: () => {
		usePathname.mockImplementation(() => mockRouter.pathname);
	},
	initialGlobals: {
		backgrounds: { value: 'dark' },
	},
};

export default preview;
