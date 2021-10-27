const ejs = require('ejs')
const fs = require('fs');
const pdf = require('html-pdf')
const axios = require('axios')
const moment = require('moment')

module.exports = async (req, res) => {

    try {
      
      const infos = req.body

        ejs.renderFile('./templates/work.ejs', { infos: infos }, (err, html) => {
            if(err) {
                console.log(err)
                return res.status(500).json({message: 'error in server'})
            }
        
            const options = {
                format: 'A4',
                orientation: 'portrait'

            }
        
            pdf.create(html, options).toFile('work.pdf', (error, response) => {
                if(!error){
                    //console.log(response)
                    //return res.json({message: 'PDF Generate'})
                    res.download('work.pdf', function(error){
                        console.log("Error : ", error)
                    });
                }else{
                    console.log(error)
                    return res.json({message: 'Fail in Genarated PDF'})
                }
            })
        })

    } catch (error) {
        
     console.log(error)
     res.send(error) 

    }

}