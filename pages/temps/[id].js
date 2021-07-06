export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = res.json();
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

const Details = () => {
    return (
        <>
            <h1>Details Page</h1>
        </>
    );
}

export default Details;