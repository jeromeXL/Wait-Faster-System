import { motion } from "framer-motion";
import { FiLogOut, FiList, FiCoffee, FiMap } from "react-icons/fi";
import { Link } from "react-router-dom";

const ManagerBottomBar = ({
    currentPageName,
}: {
    currentPageName: "ItemManagement" | "MenuManagement";
}) => {
    return (
        <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center items-center pb-4">
            <motion.nav
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white text-black shadow-lg flex rounded-lg overflow-hidden"
            >
                <NavItem
                    to="/activity-panel"
                    text="Activity Panel"
                    Icon={FiMap}
                />
                {currentPageName != "ItemManagement" && (
                    <NavItem
                        to="/manager/items"
                        text="Edit Food Items"
                        Icon={FiCoffee}
                    />
                )}
                {currentPageName != "MenuManagement" && (
                    <NavItem
                        to="/manager/menu"
                        text="Edit Menu"
                        Icon={FiList}
                    />
                )}
                <NavItem to="/logout" text="Logout" Icon={FiLogOut} />
            </motion.nav>
        </div>
    );
};

const NavItem = ({ to, text, Icon }: any) => {
    return (
        <Link
            to={to}
            className="flex items-center justify-center gap-2 p-4 hover:bg-gray-100 text-black transition-colors"
        >
            <Icon className="text-lg" />
            <span className="text-base">{text}</span>
        </Link>
    );
};

export default ManagerBottomBar;
