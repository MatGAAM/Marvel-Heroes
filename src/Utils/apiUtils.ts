import axios from 'axios';
import md5 from 'md5';
import { Hero } from '../data/heroes';


export const permissionsURL = () => {
    const publicKey = 'e92bc6259a67fc01077703541f43d4d8';
    const privateKey =  'd483ae3ea6936dd34f44753f2e458c8dd7e73c56';
    
    const generateHash = (ts: string): string => {
      const inputString = ts + privateKey +   publicKey;
      return md5(inputString);
    };
    const timestamp = new Date().getTime().toString();
    const hash = generateHash(timestamp);
    
    console.log('Timestamp:', timestamp);
    console.log('Hash:', hash);

    return `ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
}



export const getByName = async ( searchNameHero: string ) => {
    const permissions = permissionsURL()
    const responseHero = await axios.get(`http://gateway.marvel.com/v1/public/characters?name=${searchNameHero}&${permissions}`)
    return responseHero.data.data.results
}

     