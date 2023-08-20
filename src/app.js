const express = require('express')
const cors = require('cors')
require('dotenv').config();


const app = express()


app.use(cors())

app.use(require('./routes/items.route'))

const PORT = process.env.PORT ?? 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
