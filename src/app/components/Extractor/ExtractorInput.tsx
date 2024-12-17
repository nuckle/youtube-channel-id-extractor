import { Input } from "@nextui-org/input";
import { Search } from 'lucide-react';
import { Button } from "@nextui-org/button";

interface ExtractorInputProps {
    isPending: boolean;
}

export default function ExtractorInput({ isPending }: ExtractorInputProps) {

    return (
        <Input
            name="channel_url"
            type="url"
            isRequired
            placeholder="Enter YouTube channel URL"
            classNames={{
                inputWrapper: "pr-0",
            }}
            endContent={
                <Button
                    type="submit"
                    isIconOnly
                    variant="light"
                    aria-label="Search"
                >
                    {isPending ? (
                        <div
                            className="inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-white-700 border-t-transparent"
                            role="status"
                        >
                            <span
                                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                            >
                                Loading...
                            </span>
                        </div>
                    ) : (
                        <Search className="h-5 w-5" />
                    )}
                </Button>
            }
        />
    );
}
