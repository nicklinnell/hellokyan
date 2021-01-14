const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello Kyan! This is a new feature'))
app.listen(3000, () => console.log('Server ready'))
