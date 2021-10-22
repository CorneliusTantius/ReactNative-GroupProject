import axios from 'axios'

const Url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart"

const RetreiveJoke = async () => {
    const response = await axios.get(Url)
    if (response.status <= 200 && response.status < 300) {
        // console.log(response.data['setup'], response.data['delivery'])
        return [response.data['setup'], response.data['delivery']]
    }
    return "error retreiving joke"
}

export default RetreiveJoke