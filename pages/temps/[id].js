export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const paths = data.map(temp => {
        return {
            params: {id: temp.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: {temp: data}
    }
}

const Details = ({temp}) => {
    return (
        <>
            <h1>{temp.name}</h1>
            <p>{temp.email}</p>
            <p>{temp.website}</p>
            <p>{temp.address.city}</p>
        </>
    );
}

export default Details;