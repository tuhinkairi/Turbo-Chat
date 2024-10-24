import getPrismaInstance from "../utils/Prismaclient.js";

export const checkUser = (req, res, next) => {
    try{
        const {email} = req.body;
        if(email){
           const prisma = getPrismaInstance()
           const user = prisma.user.findUnique({where:{email}})
           if (user) {
            return res.json({msg:"user found",status:true, data:user})
           } 
           return res.json({msg:"user not found",status:false})
        }
    }
    catch(err){
        return next(err);
    }
};

