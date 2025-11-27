const conn = require('../config/db')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

exports.loing = async (req,res,next)=>{
    try{
        const {email , password} = req.body
        const user = await conn("users").where({email}).first()
        if(!user){return res.status(400).json({success:false , message:'not foud user'})}


        const valid = await bcrypt.compare(password , user.password)
        if(!valid){return res.status(401).json({success:false ,message:'รหัสผ่านผิด'})}


        const token = await jwt.sign({user_id:user.id , role: user.role  , username : user.name} , process.env.JWT_SECRETKEY , {expiresIn: process.env.EXPIRESIN || '1h'})
        res.json({success:true , message : 'successfully' , role:user.role , token : token})
    }catch(e){
        next(e)
    }
}

exports.register = async (req,res,next)=>{
    try{
        const {email , password , name , department_id , group_id , role = "evaluatee"} = req.body

        if(!email || !password || !name){
            return res.json({success:false , message :"กรอกข้อมูลให้ครบ"})
        }

        const users = await conn('users').where({email}).first()
        if(users){return res.status(400).json({success:false , message:'มีผู้ใช้เเล้ว'})}

        const password_hash = await bcrypt.hash(password , 10 )


        const adduser = await conn('users').insert({email , password : password_hash , name , department_id , group_id , role})
        res.json({success:true , message:'complata'})

    }catch(e){
        next(e)
    }
}


exports.department = async (req,res,next)=>{
    try{
            const deprt = await conn('department').select()
            res.json({seccess:true , deprt})
    }catch(e){
        next(e)
    }
}

exports.group = async (req,res,next)=>{
    try{
            const groups = await conn('org_groups').select()
            res.json({seccess:true , groups})
    }catch(e){
        next(e)
    }
}




