const database = require ('../models/polls')
const showPolls = async(req, res, next) =>{
    try{
        const polls = await database.find();
        res.status(200).json(polls);

    }catch(err){
        err.status = 400;
        next(err);
    }
};

const createPoll = async(req, res, next)=>{
    try{
        const {question, options}= req.body;
     const poll = await database.create({
        question,
        options: options.map(option => ({option, 
        votes: 0}))
    });
     res.status(201).json(poll);
    }catch(err){
        err.status=400;
        next(err);
    }
}

const deletePoll  =  async(req, res, next)=>{
    try{
        const {id}= req.params;
       const polld= await database.findOneAndDelete({_id:id});

        res.status(201).json(polld);
    }catch(err){
        err.status=400;
        next(err);
    }
}
 const updatePoll= async (req, res, next) =>{
    try{
         const{ id}=req.params;
         const pollupd = await database.findByIdAndUpdate({_id:id},{...req.body});
        res.status(201).json(pollupd);
    }catch(err){
        err.status=400;
        next(err);
    }
 }

module.exports= {
    showPolls, createPoll, deletePoll, updatePoll

} 