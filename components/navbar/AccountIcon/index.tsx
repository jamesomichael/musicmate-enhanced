import React from 'react';

import AccountMenu from '../AccountMenu';

import useDropdown from '@/hooks/useDropdown';

import { useAppSelector } from '@/redux/hooks';

const AccountIcon = () => {
	const user = useAppSelector((state) => state.user);
	const { dropdownRef, isOpen, toggleOpen } = useDropdown();

	return (
		<div className="h-full relative" ref={dropdownRef}>
			<div className="h-full p-1">
				{user.images && user.images.length > 0 ? (
					<div
						onClick={toggleOpen}
						className="transition-all duration-200 hover:cursor-pointer hover:scale-110 bg-cover bg-center aspect-square h-full rounded-full"
						style={{
							backgroundImage: `url(${user.images[0].url})`,
						}}
					></div>
				) : (
					<div
						onClick={toggleOpen}
						className="transition-all duration-200 hover:cursor-pointer hover:scale-110 bg-[#f573a0] aspect-square h-full rounded-full flex justify-center items-center"
					>
						<span className="uppercase font-funnel font-bold text-lg">
							{user.displayName
								? user.displayName.charAt(0)
								: user.id?.charAt(0)}
						</span>
					</div>
				)}
			</div>
			{isOpen && <AccountMenu onClose={toggleOpen} />}
		</div>
	);
};

export default AccountIcon;
