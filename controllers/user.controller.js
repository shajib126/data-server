const Data = require('../models/data.modal')
 const createDatas = async(req,res)=>{
    try {
        const {name,sector,agree} = req.body
        const data = await Data.create(req.body)
        res.status(201).json({
            success:true,
            data
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            error:error.message
        })
    }
}

module.exports = createDatas