"use client"

import { Input } from "@/components/ui/input";
import { useFormStatus } from "react-dom";

export const FormInput = ({ errors }) => {
    const {pending} = useFormStatus();

    return (
        <div>
            <Input
                type="text"
                id="title"
                name="title"
                required
                placeholder="Enter a board title"
                disabled={pending}
            />
            {errors?.title ? (
                <div>
                    {errors.title.map((error) => (
                        <p key={error} className="text-rose-500">
                            {error}
                        </p>
                    ))}
                </div>
            ) : null}
        </div>
    );
};
