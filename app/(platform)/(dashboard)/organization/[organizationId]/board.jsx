import { deleteBoard } from "@/actions/delete-board";
import { Button } from "@/components/ui/button";

export const Board = ({ title, id }) => {
    const deleteBoardWithId = deleteBoard.bind(null, id);
    return (
        <form action={deleteBoardWithId} className="flex items-center gap-x-2">
            <p>Board title: {title}</p>
            <Button variant="destructive" size="sm" type="submit">
                Delete
            </Button>
        </form>
    );
};
