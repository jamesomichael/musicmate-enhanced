import React from 'react';

const GenreTag = ({ genre }: { genre: string }) => {
	return (
		<span className="bg-gradient-to-t from-spotify-green/30 to-black/40 outline-1 outline-spotify-green/20 text-spotify-green px-3 py-1 rounded-full font-bold font-funnel text-xs">
			{genre}
		</span>
	);
};

export default GenreTag;
