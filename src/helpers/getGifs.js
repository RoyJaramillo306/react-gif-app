
export const getGifs = async(categoria) => {
    console.log(categoria);
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=4&api_key=kheUdOo8NKGpDO7HiyVwOVtklJtMoJyI`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;

}