import axios from 'axios';


// const domain = `http://localhost:4040`;


const fetchReviews = async () => {
    try {
        const res = await axios.get(`${domain}/review_summary`);
        setGames(res.data);
        console.log(res.data)
    } catch(error){
        console.error('Error fetching reviews:',error)
    }
}