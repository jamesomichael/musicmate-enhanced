import React from 'react';

import { IoInformationCircleOutline } from 'react-icons/io5';

const InfoMessage = ({ label }: { label: string }) => {
	return (
		<div className="h-full flex flex-col gap-2 justify-center items-center text-neutral-400">
			<IoInformationCircleOutline className="h-14 w-14" />
			<span className="font-funnel">{label}</span>
		</div>
	);
};

export default InfoMessage;
