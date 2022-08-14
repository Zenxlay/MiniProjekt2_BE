const { User, MyList, Reviewed } = require("../helper/relation");
const { hash, compare } = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRound = 10;

module.exports = {
  signUp: async (req, res) => {
    const password = req.body.password;
    const hashPassword = await hash(password, saltRound);
    try {
      const data = await User.create({
        email: req.body.email,
        fullName: req.body.fullName,
        password: hashPassword,
      });
      const payload = {
        id: data.id,
        fullname: data.fullname,
      };
      const token = jwt.sign(payload, "token");
      res
        .status(202)
        .json({ message: "Signup succes", data: data, token: token });
    } catch (Error) {
      console.log(Error);
      res.status(422).json({ message: Error.sqlMessage });
    }
  },
  login: async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;

      const data = await User.findOne({
        where: {
          email: email,
        },
      });
      if (!data) {
        res.status(404).json({ message: "Account not found" });
      }
      const isVeryvied = await compare(password, data.password);
      if (!isVeryvied) {
        res.status(404).json({ message: "Wrong password" });
      }

      const payload = {
        id: data.id,
        fullName: data.fullName,
      };
      const token = jwt.sign(payload, "token");
      res.json({
        message: "Login Succes",
        fullName: data.fullName,
        token: token,
      });
    } catch (err) {
      res.json({ msg: err.message });
    }
  },
  update: async function (req, res) {
    try {
      const id = req.params.id;
      const password = req.body.password;
      const hashPassword = await hash(password, saltRound);
      const data = await User.update(
        {
          fullName: req.body.fullName,
          email: req.body.email,
          password: hashPassword,
        },
        {
          where: {
            id: id,
          },
        }
      );
      res.json({ message: "Succes updated profile" });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  uploadAvatar: async (req, res) => {
    try {
      const data = await User.update(
        {
          image: req.file.filename,
        },
        {
          where: { id: req.params.id },
        }
      );
      res.status(202).json({ message: "Succes update user" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
  getOneUser: async (req, res) => {
    try {
      const data = await User.findOne({
        where: { id: req.params.id },
        include: [{ model: MyList }, { model: Reviewed }],
      });
      res.status(202).json({ message: "succes", data: data });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
};
