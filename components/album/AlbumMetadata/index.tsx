import React from 'react';

import useFormattedDate from '@/hooks/useFormattedDate';

import type { SpotifyCopyright } from '@/types/spotify';

const AlbumMetadata = ({
	releaseDate,
	releaseDatePrecision,
	copyrightNotices = [],
}: {
	releaseDate?: string;
	releaseDatePrecision?: 'year' | 'month' | 'day';
	copyrightNotices: SpotifyCopyright[];
}) => {
	const formattedReleaseDate = useFormattedDate(
		releaseDate,
		releaseDatePrecision
	);

	const formatCopyright = (type: string, text: string) =>
		type === 'C' && !text.includes('©')
			? `© ${text}`
			: type === 'P' && !text.includes('℗')
			? `℗ ${text}`
			: text;

	if (!releaseDate && copyrightNotices.length === 0) {
		return null;
	}

	return (
		<div className="flex flex-col px-4 lg:px-8 pb-8">
			<span className="font-funnel text-neutral-400 text-sm">
				{formattedReleaseDate}
			</span>
			{copyrightNotices?.map(
				({ type: noticeType, text: noticeText }, idx) => (
					<span
						key={`${idx}_${noticeType}`}
						className="font-funnel text-xs text-neutral-400"
					>
						{formatCopyright(noticeType, noticeText)}
					</span>
				)
			)}
		</div>
	);
};

export default AlbumMetadata;
