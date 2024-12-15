import { Input } from "@nextui-org/input";
import { Search } from 'lucide-react';
import { Button } from "@nextui-org/button";
import { useState } from 'react';

export default function Extractor() {
    return (
        <>
            <Input
                type="url"
                placeholder="Enter YouTube channel URL"
				classNames={{
					inputWrapper: "pr-0",
				}}
                endContent={
                    <Button
                        isIconOnly
                        variant="light"
                        aria-label="Search"
                    >
                        <Search className="h-5 w-5" />
                    </Button>
                }
            />
        </>
    )
}
