import React, { useMemo } from 'react';

const useTopItemPeriodTabs = () => {
	return useMemo(
		() => [
			{
				period: 'short_term',
				label: 'Past month',
			},
			{
				period: 'medium_term',
				label: 'Past 6 months',
			},
			{
				period: 'long_term',
				label: 'Past year',
			},
		],
		[]
	);
};

export default useTopItemPeriodTabs;
