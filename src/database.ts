import { MongoClient } from 'mongodb';

async function connectToDatabase() {
  const client = new MongoClient(process.env.MONGO_URL || 'mongodb://localhost:27017');
  try {
    await client.connect();
    console.log('Database connected successfully!');
  } catch (err) {
    console.error('Database connection failed:', err);
  } finally {
    await client.close();
  }
}

connectToDatabase();