import { MongoClient, Db } from 'mongodb';
import { DatabaseModule } from './database-module';

export class MongoDBModule extends DatabaseModule {
  private client: MongoClient;
  private db: Db;

  constructor(private uri: string, private dbName: string) {
    super();
    this.client = new MongoClient(uri);
  }

  async connect(): Promise<void> {
    await this.client.connect();
    this.db = this.client.db(this.dbName);
    console.log('Connected to MongoDB');
  }

  async disconnect(): Promise<void> {
    await this.client.close();
    console.log('Disconnected from MongoDB');
  }

  async insertOne(table: string, data: any): Promise<void> {
    const collection = this.db.collection(table);
    await collection.insertOne(data);
  }

  async findOne<T>(table: string, query: any): Promise<T> {
    const collection = this.db.collection(table);
    return await collection.findOne<T>(query);
  }
}