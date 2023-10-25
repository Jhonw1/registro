const express = require('express');
const app = express();
const db = require('./db');
const User = require('./userModel');

app.use(express.json());

app.post('/registro',async (req,res) => {
    try {
        const {name,email,password} = req.body;
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json({ message: 'Usuario registrado con éxito'});
    } catch (error) {
        res.status(500).json({ message: 'Error en el registro del usuario' });
    }
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

