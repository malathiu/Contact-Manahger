const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Users = require('./models/Users');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/ContactManager", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Routes
app.post('/createUser', (req, res) => {
    Users.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

app.get('/', (req, res) => {
    Users.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    Users.findById(id)
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

app.put('/updateUser/:id',(req,res) => {
        const id = req.params.id;
        const update = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
        };
        
        Users.findByIdAndUpdate(id, update, { new: true })
            .then(user => res.json(user))
            .catch(err => res.json(err));    
})

app.delete('/deleteUser/:id',(req,res) => {
    const id = req.params.id;

    Users.findByIdAndDelete(id)
        .then(user => res.json(user))
        .catch(err => res.json(err)); 
})

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
