import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { Search } from 'lucide-react';
import Spinner from './Spinner';

interface ExtractorInputProps {
	isPending: boolean;
}

export default function ExtractorInput({ isPending }: ExtractorInputProps) {
	return (
		<Input
			name='channel_url'
			type='url'
			isRequired
			placeholder='Enter YouTube channel URL'
			classNames={{
				inputWrapper: 'pr-0',
			}}
			endContent={
				<Button type='submit' isIconOnly variant='light' aria-label='Submit YouTube channel URL'>
					{isPending ? <Spinner /> : <Search className='h-5 w-5' />}
				</Button>
			}
		/>
	);
}
