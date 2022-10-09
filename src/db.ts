import {connect} from "mongoose";

export const connectMongo = async () => {
  try {
    const db = await connect("mongodb+srv://rdev00:JY0SS0dcPfjsdKnS@mevn-crud.3ausvq5.mongodb.net/qatar-api");

    console.log('DB is connected to host', db.connection.name);
  } catch (error) {
    console.log(error);
  }
}