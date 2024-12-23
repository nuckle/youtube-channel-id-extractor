import { useStore } from '@/app/hooks/useStore';
import { cn } from '@/app/lib/utils';
import { Button } from '@nextui-org/button';
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure,
} from '@nextui-org/modal';
import { Eraser } from 'lucide-react';
import { useState } from 'react';

interface DeleteAllChannelsButtonProps {
	className?: string;
}

export default function DeleteAllChannelsButton({
	className,
}: DeleteAllChannelsButtonProps) {
	const { deleteAllChannels } = useStore();
	const [loading, setLoading] = useState(false);
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	const handleDelete = async () => {
		setLoading(true);
		try {
			await deleteAllChannels();
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Button
				size='sm'
				startContent={<Eraser className='w-5 h-5' />}
				color='danger'
				onPress={onOpen}
				className={cn(className, 'font-medium')}
			>
				Clear
			</Button>

			<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className='flex flex-col gap-1'>Warning</ModalHeader>
							<ModalBody>
								<p>
									This action is <strong>irreversible</strong>. Once you proceed, the
									data will be permanently deleted and cannot be recovered.
								</p>
								<p>Are you sure you want to continue?</p>
							</ModalBody>
							<ModalFooter>
								<Button color='danger' variant='light' onPress={onClose}>
									Cancel
								</Button>
								<Button color='primary' onPress={handleDelete} isLoading={loading}>
									Confirm
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
