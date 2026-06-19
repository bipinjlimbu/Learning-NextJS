export default async function FetchAPI(path: `/${string}`) {
    const res = await fetch(`https://fakestoreapi.com${path}`)
    return await res.json();
}