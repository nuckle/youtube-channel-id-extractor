import { generateChannelUrl, generateRsslUrl } from '@/app/lib/utils';
import { ChannelDataType } from '@/app/types/channelType';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { Link } from '@nextui-org/link';
import { Skeleton } from '@nextui-org/skeleton';
import { Check, Copy } from 'lucide-react';
import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import ChannelDeleteButton from './ChannelDeleteButton';

interface ChannelInfoProps extends ChannelDataType {
	id?: number;
}

export default function ChannelInfo({ id, channelId, name }: ChannelInfoProps) {
	const { pending } = useFormStatus();
	const [isCopied, setIsCopied] = useState(false);

	const copyToClipboard = async (text: string) => {
		try {
			await navigator.clipboard.writeText(text);
			setIsCopied(true);
			setTimeout(() => setIsCopied(false), 1000);
		} catch (err) {
			console.error('Failed to copy text: ', err);
		}
	};

	const rssUrl = generateRsslUrl(channelId);
	const channelUrl = generateChannelUrl(channelId);

	return (
		<Card>
			<CardHeader>
				<div className='flex gap-x-2 items-center'>
					<h2>Channel Info</h2>

					{id && <ChannelDeleteButton id={id} /> }
				</div>
			</CardHeader>
			<Divider />
			<CardBody>
				<div className='mb-2'>
					<p className='text-sm text-muted-foreground mb-1'>Channel Name:</p>
					<Skeleton isLoaded={!pending}>
						<p>{name}</p>
					</Skeleton>
				</div>
				<div className='mb-2'>
					<p className='text-sm text-muted-foreground'>Channel ID:</p>
					<Skeleton className='flex items-center space-x-2' isLoaded={!pending}>
						<div className='flex items-center space-x-2'>
							<p className='text-sm font-medium'>{channelId}</p>
							<Button
								size='sm'
								isIconOnly
								onPress={() => copyToClipboard(channelId)}
								aria-label='Copy to clipboard'
								title='Copy to clipboard'
								className='min-w-[24px] w-[24px] h-[24px] p-0'
							>
								{isCopied ? (
									<Check className='h-3 w-3' />
								) : (
									<Copy className='h-3 w-3' />
								)}
							</Button>
						</div>
					</Skeleton>
				</div>
				<div className='mb-2'>
					<p className='text-sm text-muted-foreground mb-1'>Channel URL:</p>
					<Skeleton isLoaded={!pending}>
						<Link
							isExternal
							showAnchorIcon
							href={channelUrl}
							className='whitespace-nowrap'
						>
							{channelUrl}
						</Link>
					</Skeleton>
				</div>
				<div>
					<p className='text-sm text-muted-foreground mb-1'>RSS Feed URL:</p>
					<Skeleton isLoaded={!pending}>
						<Link
							isExternal
							showAnchorIcon
							href={rssUrl}
							className='whitespace-nowrap'
						>
							{rssUrl}
						</Link>
					</Skeleton>
				</div>
			</CardBody>
		</Card>
	);
}
