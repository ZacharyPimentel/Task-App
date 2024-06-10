import { MongoClient, Db} from 'mongodb';
import { SERVER } from '../../config/config';
import { requiredCollections } from './requiredCollections';

const uri = SERVER.DB_CONNECTION_STRING || ''; // Replace with your MongoDB URI
const client = new MongoClient(uri);

let db: Db;

//connect client to the db
const connectDB = async () => {
  try {
    await client.connect();
    db = client.db(SERVER.DB_NAME); // Replace with your database name

    //make sure all required collections for the app are created
    let collectionNames = (await db.listCollections().toArray()).map( (collection) => {
      return collection.name
    })
    dbCollectionsInit(collectionNames);
        
    console.log('Connected to MongoDB');
    
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
};

export { connectDB, db };

// checks the existing collections against the harcoded required ones
// creates any missing collections in the db
async function dbCollectionsInit(existingCollections:string[]){
  requiredCollections.forEach( async(requiredCollection) => {
    if(!existingCollections.includes(requiredCollection)){
      console.log(`Creating missing collection ${requiredCollection}`)
      await db.createCollection(requiredCollection)
    }
  })
}
