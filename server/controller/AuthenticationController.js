import { comparePassword, encryptPassword } from "../middleware/EncryptPass.js";
import getPrismaInstance from "../utils/Prismaclient.js";

export const checkUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);

    const prisma = getPrismaInstance();
    const user = await prisma.user.findUnique({
      where: { email: email },
    });
    console.log(user);
    if (!user) {
      return res.json({ msg: "user not found", status: false });
    }
    if(!user.password){
      return res.json({ msg: "g user found", status: true, data: user });
    }
    if (comparePassword(password, user.password)) {
      return res.json({ msg: "Normal user found", status: true, data: user });
    }
  } catch (err) {
    return next(err);
  }
};

export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, avatar, about} = req.body;
    const prisma = getPrismaInstance();
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password?encryptPassword(password):null,
        profilePicture:avatar,
        about:about
      },
    });
    return res.json({ msg: "user created", status: true, data: user });
  } catch (err) {
    return next(err);
  }
};
