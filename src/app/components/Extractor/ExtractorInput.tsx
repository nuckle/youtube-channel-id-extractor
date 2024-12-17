import { Input } from '@nextui-org/input';
import { Search } from 'lucide-react';
import Spinner from './Spinner';
import { Button } from '@nextui-org/button';

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
				<Button type='submit' isIconOnly variant='light' aria-label='Search'>
					{isPending ? <Spinner /> : <Search className='h-5 w-5' />}
				</Button>
			}
		/>
	);
}
