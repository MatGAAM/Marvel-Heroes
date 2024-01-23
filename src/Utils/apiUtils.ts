import axios from 'axios';
import md5 from 'md5'


export const permissionsURL = () => {
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;
    const privateKey = process.env.REACT_APP_PRIVATE_KEY;
    
    const generateHash = (ts: string): string => {
      const inputString = ts + privateKey +   publicKey;
      return md5(inputString);
    };
    const timestamp = new Date().getTime().toString();
    const hash = generateHash(timestamp);
    

    return `ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
}



export const getByName = async ( searchNameHero: string ) => {
    const permissions = permissionsURL()
    const responseHero = await axios.get(`https://gateway.marvel.com/v1/public/characters?name=${searchNameHero}&${permissions}`)
    return responseHero.data.data.results
}


export const getComics = async (URIComic: string) => {
  const permissions = permissionsURL()
  const listComics = await axios.get(`${URIComic}?orderBy=-onsaleDate&${permissions}`)
  return listComics.data.data.results[0]
}
     