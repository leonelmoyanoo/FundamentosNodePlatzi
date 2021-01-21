const bcrypt = require('bcrypt')

const password = '1234!Segura'

bcrypt.hash(password,5,(err, hash)=>{
    console.log(hash)
    bcrypt.compare(password,hash,(err,res)=>{
        console.error(err);
        console.log(res)
    })
})
