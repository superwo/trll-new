"use client";

import { X } from "lucide-react";
import { toast } from "sonner";
import {
    Popover,
    PopoverClose,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import { useAction } from "@/hooks/use-action";
import { createBoard } from "@/actions/create-board";
import { Button } from "@/components/ui/button";

import { FormInput } from "./form-input";
import { FormSubmit } from "./form-submit";

export const FormPopover = ({
    children,
    side = "bottom",
    align,
    sideOffset = 0,
}) => {
    const { execute, fieldErrors } = useAction(createBoard, {
        onSuccess: (data) => {
            console.log({ data });
            toast.success("Board created!");
        },
        onError: (error) => {
            console.log({ error });
            toast.error(error);
        },
    });

    const onSubmit = (formData) => {
        const title = formData.get("title");
        execute({ title });
    };

    return (
        <Popover>
            <PopoverTrigger asChild>{children}</PopoverTrigger>
            <PopoverContent
                align={align}
                className="w-80 pt-3"
                side={side}
                sideOffset={sideOffset}
            >
                <div className="text-sm font-medium text-center text-neutral-600 pb-4">
                    Create board
                </div>

                <PopoverClose asChild>
                    <Button
                        variant="ghost"
                        className="h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600"
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </PopoverClose>
                <form action={onSubmit} className="space-y-4">
                    <div className="space-y-4">
                        <FormInput
                            id="title"
                            label="Board title"
                            type="text"
                            errors={fieldErrors}
                        />
                    </div>
                    <FormSubmit className="w-full">Create</FormSubmit>
                </form>
            </PopoverContent>
        </Popover>
    );
};