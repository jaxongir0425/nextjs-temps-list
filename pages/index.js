import Navbar from "./components/Navbar";
import styles from '../styles/Home.module.css'
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <h5>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aut corporis cumque cupiditate,
                distinctio eos esse expedita, explicabo incidunt ipsum necessitatibus optio pariatur quaerat repudiandae
                sunt vel velit? Dolores!
            </h5>
            <Link href="/temps">
                <a>See Temp Listing</a>
            </Link>
        </div>
    )
}
