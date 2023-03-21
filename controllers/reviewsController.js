const db    =   require('../models')
const review =  db.reviews

const addReview = async (req,res)=>{
    let data = {
        rating:req.body.rating,
        description:req.body.description,
        product_id:req.body.product_id
    }

    const review_data    =   await review.create(data);
    res.status(200).send(review_data);
}

const getReview = async (req,res)=>{
    const review_data    =   await review.findAll({})
    res.status(200).send(review_data)
}

module.exports={
    addReview,
    getReview
}