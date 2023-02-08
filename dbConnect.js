const mongoose = require('mongoose')

const secretPass = `K8uSDHWXIZP8VlAj`;
const uri = `mongodb+srv://Adityadev:${secretPass}@cluster0.75kbw6j.mongodb.net/noteBook?retryWrites=true&w=majority`


const connection = () => {

    try {
        mongoose.connect(uri)
            .then(() => { console.log("MongoDb Connected") })
            .catch((err) => { console.log("Mongodb Not Connected") })

    } catch (err) {
        console.log("Not Connected", err.response.data)
    }
}

module.exports = connection;