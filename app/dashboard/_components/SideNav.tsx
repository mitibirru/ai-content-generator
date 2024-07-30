import Image from 'next/image';
import React from 'react';

function SideNav() {
	return (
		<div className="h-screen p-5 shadow-sm border">
			<div className="flex justify-center">
				<Image src="/logo.svg" width={40} height={40} alt="" />
				<h1 className="font-bold text-2xl">G.ai</h1>
			</div>
		</div>
	);
}

export default SideNav;
