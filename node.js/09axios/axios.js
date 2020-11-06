let axios = require('axios')

let httpUrl = `https://www.9527video.com/`

axios.get(httpUrl).then(res => {
    console.log(res);
})