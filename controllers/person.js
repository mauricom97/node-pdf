const ejs = require('ejs')
const fs = require('fs');
const pdf = require('html-pdf')
const axios = require('axios')
const moment = require('moment')

module.exports = async (req, res) => {

    try {
      
    //   const infos = { nome: req.params.nome, idade: req.params.idade, endereco: req.params.endereco}

    //     ejs.renderFile('./templates/entities.ejs', { infos: infos }, (err, html) => {
    //         if(err) {
    //             console.log(err)
    //             return res.status(500).json({message: 'error in server'})
    //         }
        
    //         const options = {
    //             format: 'A4',
    //             orientation: 'portrait'

    //         }
        
    //         pdf.create(html, options).toFile('uploads/reports.pdf', (error, response) => {
    //             if(!error){
    //                 return res.json({message: 'PDF Generate'})
    //             }else{
    //                 console.log(error)
    //                 return res.json({message: 'Fail in Genarated PDF'})
    //             }
    //         })
    //     })
    res.send({"nome": req.params.nome})
    } catch (error) {
        
     console.log(error)
     res.send(error) 

    }

}