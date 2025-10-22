import { useCallback, useEffect, useRef } from 'react';

import useToggle from './useToggle';

const useDropdown = () => {
	const {
		value: isOpen,
		toggle: toggleOpen,
		setOff: close,
	} = useToggle(false);

	const dropdownRef = useRef<HTMLDivElement>(null);

	const handleClickOutside = useCallback(
		(event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				close();
			}
		},
		[close]
	);

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [handleClickOutside]);

	return { dropdownRef, isOpen, toggleOpen, close };
};

export default useDropdown;
