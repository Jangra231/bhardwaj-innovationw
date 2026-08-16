import mongoose, { Connection } from "mongoose";

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development and to prevent connection pool exhaustion across
 * serverless function invocations in production (Vercel).
 *
 * Vercel serverless functions are stateless — without global caching every
 * invocation would open a new Mongoose connection, rapidly exhausting the
 * database connection pool.
 */
interface CachedConnection {
  conn: Connection | null;
  promise: Promise<Connection> | null;
}

interface MongooseGlobal {
  mongoose?: CachedConnection;
}

const globalWithMongoose = global as unknown as MongooseGlobal;

if (!globalWithMongoose.mongoose) {
  globalWithMongoose.mongoose = { conn: null, promise: null };
}

const cached: CachedConnection = globalWithMongoose.mongoose;

async function dbConnect(): Promise<Connection> {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local or your Vercel project settings."
    );
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts: mongoose.ConnectOptions = {
      serverSelectionTimeoutMS: 5000,
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongooseInstance) => {
        return mongooseInstance.connection;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (err) {
    cached.promise = null;
    throw err;
  }

  return cached.conn;
}

export default dbConnect;
