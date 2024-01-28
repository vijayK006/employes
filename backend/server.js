const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./Models/user')


const app = express()
app.use(cors(
{
    origin:["https://employes-livid.vercel.app"],
    method:["POST","GET","PUT","DELETE"],
    Credentials:ture
}
))

app.use(express.json())


const PORT = 5000
mongoose.connect("mongodb+srv://vijaydb:vijaydb06@cluster0.sp5wy8o.mongodb.net/storedata?retryWrites=true&w=majority")

app.get('/', (req, res) => {
   
    UserModel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))

})


app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;

    UserModel.findById({ _id: id })
        .then(users => res.json(users))
        .catch(err => res.json(err))

})

app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;

    UserModel.findByIdAndUpdate({ _id: id },
        {
            username: req.body.username,
            password: req.body.password,
            details: req.body.details
        })
        .then(users => res.json(users))
        .catch(err => res.json(err))

})

app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;

    UserModel.findByIdAndDelete({ _id: id })
        .then(res => res.json(res))
        .catch(err => res.json(err))

})

app.post('/createUser', (req, res) => {
    UserModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))

})

app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT} post`)
})