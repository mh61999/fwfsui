import axios from "axios";

const LoadQuestions = () => {
    return new Promise(async(resolve, reject) => {
        await axios.get('https://opentdb.com/api.php?amount=20&category=18').then(Response => {
            resolve(Response.data.results)
        })
        .catch(er=>{
            reject(er)
        })
    })
}

export default LoadQuestions;