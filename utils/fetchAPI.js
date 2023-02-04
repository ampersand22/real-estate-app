import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'



export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '5f3bf030eamshe596dd158dcfda6p1bf24cjsnb6f1f8a4de37',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });

    return data;
}