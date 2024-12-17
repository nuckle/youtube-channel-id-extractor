import Image from 'next/image';
import githubIcon from '../../../public/github.svg';
import { cn } from "../lib/utils";

export default function Footer({ className }: { className?: string }) {

    return (
        <footer className={cn(className)}>
            <div className="container mx-auto px-4 py-3 flex justify-center items-center">
                <a
                    href="https://github.com/nuckle/youtube-channel-id-extractor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 hover:text-blue-500 dark:hover:text-blue-400"
                >
                    <Image className="h-5 w-5 dark:invert mr-2" priority src={githubIcon} alt='Github logo' />
                    <span>View on GitHub</span>
                </a>
            </div>
        </footer>
    )
}

