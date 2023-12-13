import { OrgControl } from "./_components/org-control";

const OrganizationIdLayout = ({ children }) => {
    return (
        <>
            <OrgControl />
            {children}
        </>
    );
};

export default OrganizationIdLayout;
