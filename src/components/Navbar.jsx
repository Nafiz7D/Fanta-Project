import { FaRegUser } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { MdMenu } from "react-icons/md";

const NavbarMenu = [
    {
        id: 1,
        title: "Home",
        link: "#",
    },
    {
        id: 2,
        title: "Categories",
        link: "#",
    },
    {
        id: 3,
        title: "Blog",
        link: "#",
    },
    {
        id: 4,
        title: "About",
        link: "#",
    },
    {
        id: 5,
        title: "Contact",
        link: "#",
    },
];

const Navbar = () => {
    return (
        <div className="bg-orange-500 text-white py-8">
            <div className="container flex justify-between items-center">
                {/* logo section */}
                <div>
                    <img className="max-w-[100px] invert" src={Logo} alt="" />
                </div>
                {/* Menu section */}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-4 relative z-40">
                        {
                            NavbarMenu.map((item) => (
                                <li>
                                    <a className="inline-block text-base font-semibold py-2 px-3 uppercase" href={item.link}>{item.title}</a>
                                </li>
                            ))}
                        <button className="text-xl ps-14">
                            <FaRegUser></FaRegUser>
                        </button>
                    </ul>
                </div>
                {/* Hamburger Icon */}
                <div className="md:hidden">
                    <MdMenu className="text-4xl"></MdMenu>
                </div>
            </div>
        </div>
    )
}

export default Navbar