import getPrismaInstance from "../utils/Prismaclient.js";

export const checkUser = async (req, res, next) => {
  try {
    const { email } = req.body;

    const prisma = getPrismaInstance();
    const user = await prisma.user.findUnique({
      where: { email: email },
    });
    console.log(user);
    if (!user) {
      return res.json({ msg: "user not found", status: false });
    }
    return res.json({ msg: "user found", status: true, data: user });
    
  } catch (err) {
    return next(err);
  }
};
