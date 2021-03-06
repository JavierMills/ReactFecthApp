

   export const getGifs = async( category ) => {
        const url = `https://api.giphy.com/v1/gifs/search?&limit=15&q=${ encodeURI (category) }&api_key=1gEgcutOB1out9PwYNpHiYkd6kq4ocIb`
        const response = await fetch( url );
        const {data} = await response.json();

        const gifs = data.map(item => {
            return {
                id: item.id,
                title: item.title,
                url: item.images?.downsized_medium.url
            }
        })
       return gifs;
    }   