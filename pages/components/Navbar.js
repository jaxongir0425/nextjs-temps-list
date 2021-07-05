import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.png"

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="logo">
                    <Image width="90" height="40" src={logo}/>
                </div>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
                <Link href="/temps">
                    <a>Temp Listing</a>
                </Link>
            </nav>
        </>
    );
}

export default Navbar;