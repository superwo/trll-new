import { Navbar } from "../_components/navbar";

const DashboardLayout = ({ children }) => {
    return (
        <div className="h-full">
            <Navbar />
            {children}
        </div>
    );
};

export default DashboardLayout;
