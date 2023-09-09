import mongoose from 'mongoose';
const DB_PASSWORD=process.env.DB_PASSWORD
const DB_USER=process.env.DB_USER //winproject
const DB_NAME=process.env.DB_NAME //win
const DB_URL = `mongodb+srv://${DB_NAME}:${DB_PASSWORD}@${DB_USER}.kaegzcw.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

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
