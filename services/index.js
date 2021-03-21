const MongoClient = require('mongodb').MongoClient;

let state = { db: null, client: null }

const options = { useNewUrlParser: true, connectTimeoutMS: 3000, useUnifiedTopology: true, autoReconnect: false }

const connect = async (url, done) => {
   try {
      let client = await MongoClient.connect(url, options)
      state.db = client.db(process.env.MONGO_DB)
      state.client = client
      return state
   } catch (e) {
      process.exit(1);
      throw (e)
   }
}

async function connectToDatabase(uri) {
   if (state && state.db && state.db.serverConfig.isConnected()) {
      console.log('=> using cached database instance in Lambda Container');
      return state.db;
   } else {
      await MongoClient.connect(uri, options).then(clients => { state.db = clients.db(process.env.MONGO_DB); });
      return state.db;
   }

}

const get = () => { return state.db }

const client = () => { return state.client }

const close = () => { return true }

exports.db = { connect, get, client, close, connectToDatabase }
