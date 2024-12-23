import { useStore } from '@/app/hooks/useStore';
import { useState } from 'react';
import { Button } from '@nextui-org/button';
import { Trash2 } from 'lucide-react';

interface ChannelDeleteButtonProps {
	id: number;
}

export default function ChannelDeleteButton({ id }: ChannelDeleteButtonProps) {
	const { deleteChannel } = useStore();
	const [loading, setLoading] = useState(false);

	const handleDelete = async () => {
		setLoading(true);
		try {
			await deleteChannel(id);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Button
			isIconOnly
			aria-label='Toggle Theme'
			title='Toggle Theme'
			size='sm'
			variant='light'
			onPress={handleDelete}
			isLoading={loading}
		>
			<Trash2 />
		</Button>
	);
}
