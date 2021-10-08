const express = require('express')
const fs = require('fs');
const pdf = require('html-pdf')
const port = 3000
const app = express()

const generatePDF = (req, res) => {

    const html = fs.readFileSync('index.html').toString()
        
    const options = {
        type: 'pdf',
        format: 'A4',
        orientation: 'portrait'
    }

    pdf.create(html, options).toBuffer((err, buffer) => {
        if(err) return res.status(500).json(err)
        res.end(buffer)
    })
}

app.get('/generatePFD', generatePDF)

app.listen(port, () => {
    console.log(`Server in ${port}`)
})