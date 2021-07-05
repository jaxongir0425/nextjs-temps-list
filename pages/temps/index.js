import Head from "next/head";
import styles from "../../styles/Temp.module.css"
import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props: {temps: data}
    }
}

const Temps = ({temps}) => {
    return (
        <>
            <Head>
                <title>Temp List | Temps</title>
                <meta name="keywords" content="temps"/>
            </Head>
            <h1>All Temps</h1>
            {temps.map(temp => (
                <>
                    <div key={temp.id}>
                        <Link href={'/temps/' + temp.id}>
                            <a className={styles.single}>
                                <h3>{temp.name}</h3>
                            </a>
                        </Link>
                    </div>
                </>
            ))}
        </>
    );
}

export default Temps;