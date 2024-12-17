import Image from 'next/image';
import Link from 'next/link';
import youtubeIcon from '../../../public/youtube.svg';

export default function Header() {
    return (
        <>
            <header className="mb-4">
                <nav>
                    <ul className="flex justify-between py-5 align-center flex-row flex-wrap">
                        <li>
                        	<h1>
								<Link className='title flex' href="/">
									<Image className="dark:invert mr-2" priority src={youtubeIcon} alt='YouTube logo'/>
									Channel Id Extractor
								</Link>
							</h1>
						</li>
                        <li>
                            <Link href="/faq" className='hover:text-blue-500 dark:hover:text-blue-400'>FAQ</Link>
                        </li>
                    </ul>
                </nav>
            </header>

        </>
    )
}
