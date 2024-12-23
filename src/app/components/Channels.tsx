'use client';

import ChannelInfo from './ChannelInfo/ChannelInfo';
import { useStore } from '../hooks/useStore';
import { cn } from '../lib/utils';

interface ChannelsProps {
	pageNumber: number;
	pageSize: number;
	className?: string;
}

export default function Channels({
	pageNumber,
	pageSize,
	className,
}: ChannelsProps) {
	const { getAllChannels } = useStore();
	const channels = getAllChannels(pageNumber, pageSize);

	return (
		<ul className={cn(className)}>
			{channels === undefined ? (
				<li>Loading...</li>
			) : (
				<>
					{channels?.map((channel, i) => (
						<li key={i} className='mb-3'>
							<ChannelInfo
								id={channel.id}
								channelId={channel.channelId}
								name={channel.name}
							/>
						</li>
					))}
				</>
			)}
		</ul>
	);
}
