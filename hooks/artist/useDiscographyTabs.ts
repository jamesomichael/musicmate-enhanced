import { useMemo } from 'react';

import { ArtistDiscography } from '@/types/artists';

const useDiscographyTabs = (discography: ArtistDiscography) => {
	const { albums, singles, compilations } = discography;

	return useMemo(
		() => ({
			...(albums.items.length > 0 && {
				albums: {
					label: 'Albums',
					data: albums,
				},
			}),
			...(singles.items.length > 0 && {
				singles: {
					label: 'Singles and EPs',
					data: singles,
				},
			}),
			...(compilations.items.length > 0 && {
				compilations: {
					label: 'Compilations',
					data: compilations,
				},
			}),
		}),
		[albums, singles, compilations]
	);
};

export default useDiscographyTabs;
