"use client";

import {
    Popover,
    PopoverClose,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import { useAction } from "@/hooks/use-action";
import { CreateBoard } from "@/actions/create-board";
import { Button } from "@/components/ui/button";

import { FormInput } from "./form-input";
import { FormSubmit } from "./form-submit";
import { X } from "lucide-react";

export const FormPopover = ({
    children,
    side = "bottom",
    align,
    sideOffset = 0,
}) => {
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
            </PopoverContent>
        </Popover>
    );
};
