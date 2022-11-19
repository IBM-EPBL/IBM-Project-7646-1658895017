const username = "paulanand";
const password = "New-1234";
const cluster = "cluster0.15ztsbt";
const dbname = "test";

module.exports = {
  //url: "mongodb://localhost:27017/bezkoder_db"
  url:`mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`
  //url:"mongodb+srv://paulanand:New-1234@cluster0.15ztsbt.mongodb.net/?retryWrites=true&w=majority"
};
