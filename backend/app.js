const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000 // either use the process.env.PORT once API is live or use 8000 locally

app.get('/', (req, res) => {
    res.send("<h1>Name: Victor Oldensand</h1>")
})

app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`)
})