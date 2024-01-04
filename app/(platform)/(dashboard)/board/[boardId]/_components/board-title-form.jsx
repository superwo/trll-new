"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/form/form-input";
import { useAction } from "@/hooks/use-action";
import { updateBoard } from "@/actions/update-board";
import { toast } from "sonner";

export const BoardTitleForm = ({ data }) => {
    const { execute } = useAction(updateBoard, {
        onSuccess: (data) => {
            toast.success(`Board "${data.title}" updated!`);
            setTitle(data.title);
            disableEditing();
        },
        onError: (error) => {
            toast.error(error);
        },
    });
    const formRef = useRef(null);
    const inputRef = useRef(null);

    const [title, setTitle] = useState(data.title);
    const [isEditing, setIsEditing] = useState(false);

    const disableEditing = () => setIsEditing(false);
    const enableEditing = () => {
        setIsEditing(true);

        setTimeout(() => {
            inputRef.current?.focus();
            inputRef.current?.select();
        });
    };

    const onSubmit = (formData) => {
        const title = formData.get("title");

        execute({
            title,
            id: data.id,
        });
    };

    const onBlur = () => {
        formRef.current?.requestSubmit();
    };

    if (isEditing) {
        return (
            <form
                action={onSubmit}
                ref={formRef}
                className="flex items-center gap-x-2"
            >
                <FormInput
                    ref={inputRef}
                    id="title"
                    onBlur={onBlur}
                    defaultValue={title}
                    className="text-lg font-bold px-[7px] py-1 h-7 bg-transparent focus-visible:outline-none focus-visible:ring-transparent border-none"
                />
            </form>
        );
    }

    return (
        <Button
            onClick={enableEditing}
            variant="transparent"
            className="font-bold text-lg h-auto w-auto p-1 px-2"
        >
            {title}
        </Button>
    );
};
