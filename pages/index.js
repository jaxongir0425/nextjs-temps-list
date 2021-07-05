import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <h1 className={styles.title}>Home Page</h1>
            <h4 className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aut corporis cumque cupiditate,
                distinctio eos esse expedita, explicabo incidunt ipsum necessitatibus optio pariatur quaerat repudiandae
                sunt vel velit? Dolores!
            </h4>
            <h5 className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est impedit ipsum nam necessitatibus
                pariatur quidem quisquam! Accusamus exercitationem hic id laboriosam minima necessitatibus nesciunt,
                non, obcaecati possimus quam quasi?
            </h5>
            <Link href="/temps">
                <a className={styles.btn}>See Temp Listing</a>
            </Link>
        </div>
    )
}
