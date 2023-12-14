"use client";
import Link from "next/link";
import { Plus } from "lucide-react";
import { useLocalStorage } from "usehooks-ts";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion } from "@/components/ui/accordion";

export const Sidebar = ({ storageKey = "t-sidebar-state" }) => {
    const [expanded, setExpanded] = useLocalStorage(storageKey, {});
    const { organization: activeOrganization, isLoaded: isLoadedOrg } =
        useOrganization();

    const { userMemberships, isLoaded: isLoadedOrgList } = useOrganizationList({
        userMemberships: {
            infinite: true,
        },
    });

    const defaultAccordionValue = Object.keys(expanded).reduce((acc, key) => {
        if (expanded[key]) {
            acc.push(key);
        }

        return acc;
    }, []);

    const onExpand = (id) => {
        setExpanded((curr) => ({
            ...curr,
            [id]: !expanded[id],
        }));
    };

    if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
        return (
            <>
                <Skeleton />
            </>
        );
    }

    return (
        <>
            <div className="font-medium text-xs flex items-center mb-1">
                <span>Workspaces</span>
                <Button
                    asChild
                    type="button"
                    size="icon"
                    variant="ghost"
                    className="ml-auto"
                >
                    <Link href="/select-org">
                        <Plus className="h-4 w-4" />
                    </Link>
                </Button>
            </div>
            <Accordion
                type="multiple"
                defaultValue={defaultAccordionValue}
                className="space-y-1"
            >
                {userMemberships.data.map(({ organization }) => (
                    <p key={organization.id}>{organization.id}</p>
                ))}
            </Accordion>
        </>
    );
};

export default Sidebar;
