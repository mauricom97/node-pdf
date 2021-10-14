const ejs = require('ejs')
const fs = require('fs');
const pdf = require('html-pdf')

module.exports = async (req, res) => { 

    try {

        ejs.renderFile('./templates/index.ejs', req.body, (err, html) => {
            if(err) {
                console.log(err)
                return res.status(500).json({message: 'error in server'})
            }
        
            const options = {
                format: 'A4'
            }
        
            pdf.create(html, options).toFile('uploads/reports.pdf', (error, response) => {
                if(!error){
                    return res.json({message: 'PDF Generate'})
                }else{
                    console.log(error)
                    return res.json({message: 'Fail in Genarated PDF'})
                }
            })
        })

    } catch (error) {
        
     console.log(error)   

    }

}