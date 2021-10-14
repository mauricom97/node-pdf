const express = require('express')
const fs = require('fs');
const pdf = require('html-pdf')
const port = 3000
const app = express()
const exphbs = require('express-handlebars')
const ejs = require('ejs')

app.get('/:name', (req, res) => {
    ejs.renderFile('./templates/index.ejs', {name: req.params.name}, (err, html) => {
        if(err) {
            return res.status(500).json({message: 'error in server'})
        }

        const options = {
            format: 'A4',
            border: {
                right: 8
            }
        }

        pdf.create(html, options).toFile('./uploads/report.pdf', (error, response) => {
            if(!error){
                return res.json({message: 'PDF Generate'})
            }else{
                return res.json({message: 'Fail in Genarated PDF'})
            }
        })
    })
})

app.listen(port, () => {
    console.log(`Server in ${port}`)
})