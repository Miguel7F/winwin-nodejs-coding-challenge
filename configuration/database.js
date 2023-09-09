import mongoose from 'mongoose';
const DB_PASSWORD=process.env.DB_PASSWORD
const DB_CLUSTER=process.env.DB_CLUSTER //winproject
const DB_USER=process.env.DB_USER//win
const DB_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}.kaegzcw.mongodb.net/${DB_USER}?retryWrites=true&w=majority`;

const database = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error('Error to connect database:', error);
  }
};

export default database;
