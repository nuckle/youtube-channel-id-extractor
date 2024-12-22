'use client';

import { History, BookText } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import youtubeIcon from '../../../public/youtube.svg';
import ThemeSwitch from './ThemeSwitch';
import { cn } from '../lib/utils';

export default function Header() {

	const pathname = usePathname()

	return (
		<>
			<header className='mb-4'>
				<nav className='flex items-center justify-between py-4'>
					<Link href='/' className='flex items-center space-x-2'>
						<Image
							className='dark:invert'
							priority
							src={youtubeIcon}
							alt='YouTube logo'
							width={32}
							height={32}
						/>
						<span>Channel ID Extractor</span>
					</Link>
					<ul className='flex items-center space-x-5'>
						<li>
							<Link
								href='/history'
								title='History'
								className={cn(
									'flex items-center space-x-1 hover:text-primary transition-colors',
									pathname === '/history' && 'text-primary font-semibold',
								)}
							>
								<History className='w-5 h-5' />
								<span className='hidden sm:inline'>History</span>
							</Link>
						</li>
						<li>
							<Link
								href='/faq'
								title='FAQ'
								className={cn(
									'flex items-center space-x-1 hover:text-primary transition-colors',
									pathname === '/faq' && 'text-primary font-semibold',
								)}
							>
								<BookText className='w-5 h-5' />
								<span className='hidden sm:inline'>FAQ</span>
							</Link>
						</li>
						<li className='flex items-center'>
							<ThemeSwitch />
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
