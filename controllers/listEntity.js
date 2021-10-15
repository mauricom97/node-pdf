const ejs = require('ejs')
const fs = require('fs');
const pdf = require('html-pdf')
const axios = require('axios')

module.exports = async (req, res) => {

    try {

        let entities = null 

        var config = {
        method: 'get',
        url: 'http://192.168.2.23:4002/clients',
        headers: { 
            'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiNjUyYzFjZWYtZTU0YS00NTI5LThmMDgtOWRjM2UzNGMyZDMwIiwiZnVsbG5hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwiZGJfbmFtZSI6ImJlYXVkaW9fbWF0cml4IiwidGltZSI6MTYzMDU4ODg0NjUyOCwiaWF0IjoxNjMwNTg4ODQ2fQ.QPXOe8r3Iw5fhSnpR4n2ssuViXsfSBUzxqLKH_4Gt3k'
        }
        };

        await axios(config)
        .then(function (response) {
        entities = response.data
        })
        .catch(function (error) {
        console.log(error);
        });

        let data = entities.client[2].entity[0].gentity
        data.name = 'Mauricio'
        console.log(data)
        ejs.renderFile('./templates/entities.ejs', data, (err, html) => {
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