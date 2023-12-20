"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { z } from "zod";

const CreateBoard = z.object({
    title: z.string().min(3, {
        message: "Minimum length of 3 characters is required",
    }),
});

export async function create(prevState, formData) {
    const validatedFields = CreateBoard.safeParse({
        title: formData.get("title"),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Missing fields.",
        };
    }

    const { title } = validatedFields.data;

    try {
        await db.board.create({
            data: {
                title,
            },
        });
    } catch (error) {
        return {
            message: "Database Error.",
        };
    }

    revalidatePath("/organization/org_2ZiVMwAdr0maKnqPJlG9ikkrAkD");
    redirect("/organization/org_2ZiVMwAdr0maKnqPJlG9ikkrAkD");
}
