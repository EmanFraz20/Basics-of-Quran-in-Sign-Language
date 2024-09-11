import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import  questions,{answers} from "../database/data.js";

export async function getQuestions(req,res){
    try{
       const q= await Questions.find();
       res.json(q)
     }catch(error){
          res.json({error})
     }
}

export async function insertQuestions(req, res) {
  try {
      await Questions.insertMany({ questions,answers});
      res.json({ msg: "Data Saved Successfully...!" });
  } catch (error) {
      res.json({ error });
  }
}

export async function dropQuestions(req,res){
    try {
        await Questions.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!" });
      } catch (error) {
        res.json({ error });
      }
    
}

export async function getResult(req,res){
    try {
      const totalResults = await Results.countDocuments();

      // If there are more than 20 results, delete the oldest ones
      if (totalResults > 5) {
          const resultsToDelete = totalResults - 5;
          // Delete the oldest 'resultsToDelete' entries
          // Use find to get the IDs of the oldest entries
          const oldResults = await Results.find({})
              .sort({ createdAt: 1 }) // Sort by creation date, oldest first
              .limit(resultsToDelete);

          // Extract the IDs of the oldest results
          const oldResultIds = oldResults.map((result) => result._id);

          // Delete the documents by their IDs
          await Results.deleteMany({ _id: { $in: oldResultIds } });
      }

      // Fetch the latest 20 results
      const r= await Results.find({}).sort({ createdAt: -1 }).limit(20);
      res.json(r);
    } catch (error) {
      res.json({ error });
    }
}

 export async function storeResult(req,res){
    try{
      const { username = "", result = [], attempts = 0, points = 0, achived = "" } = req.body;
     
        if (!username || !result) {throw new Error("Data Not Provided...!");}

          if(attempts=== undefined||points===undefined||achived===undefined){
            throw new Error("not achived");
          }
       const Res = new Results({
          username:username,
         result:result,
          attempts:attempts,
          points:points,
          achived:achived,
        });
       Res.validateSync();
       await Res.save();
       const totalResults = await Results.countDocuments();
       if (totalResults > 20) {
           // Find and delete the oldest result
           await Results.findOneAndDelete({}, { sort: { createdAt: 1 } });}
        res.json({ msg: "Result Saved Successfully...!" });
      } catch (error) {
        console.log(error.message);
        res.json({ error });
      }
}

export async function dropResult(req,res){
    try {
        await Results.deleteMany();
        res.json({ msg: "Result Deleted Successfully...!" });
      } catch (error) {
        res.json({ error });
      } 
}

