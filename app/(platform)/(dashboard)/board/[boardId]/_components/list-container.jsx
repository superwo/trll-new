"use client";

import { ListForm } from "./list-form";

export const ListContainer = ({ data, boardId }) => {
    return (
        <ol>
            <ListForm />
            <div className="flex-shrink-0 w-1"></div>
        </ol>
    );
};
