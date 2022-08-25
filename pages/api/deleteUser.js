import mongoose from "mongoose";

export default async function DeleteUser(req, res) {
  const { username } = req.body;
  await mongoose.connect(
    "mongodb+srv://meir:anuarbekov2006@cluster0.wvnxusi.mongodb.net/Users?retryWrites=true&w=majority"
  );
  const users = mongoose.models.users;
  const response = await users.findOneAndDelete({ username });
  response
    ? await res.status(200).send(`User ${username} was successfully deleted!`)
    : await res.send(`User ${username} is not existing`);
}
