import mongoose from "mongoose";
const { Schema } = mongoose;

export default function AddUser(req, res) {
  const { username, password } = req.body;
  mongoose.connect(
    "mongodb+srv://meir:anuarbekov2006@cluster0.wvnxusi.mongodb.net/Users?retryWrites=true&w=majority"
  );
  const userSchema = new Schema({
    username: { type: String, unique: true },
    password: String,
  });
  const users = mongoose.models.users || mongoose.model("users", userSchema);
  const user = new users({ username: username, password: password });
  user.save().then(() => {
    res.status(200).send("User added!");
  });
}
