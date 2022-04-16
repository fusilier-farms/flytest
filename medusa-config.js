// CORS when consuming Medusa from admin
const ADMIN_CORS = process.env.ADMIN_CORS || "http://localhost:7000";

// CORS to avoid issues when consuming Medusa from a client
const STORE_CORS = process.env.STORE_CORS || "http://localhost:3000";

// Database URL (here we use a local database called medusa-development)
const DATABASE_URL =
    process.env.DATABASE_URL || "postgres://postgres:myPassword@localhost:5432/postgres";

// 'postgres://postgres:k9Y6K2CnvhFdMZ@database-2.cihpniegya9y.us-east-1.rds.amazonaws.com:5432/database-2'

// Medusa uses Redis, so this needs configuration as well
const REDIS_URL = process.env.REDIS_URL || "redis://localhost:6379"; // 127.0.0.1:6379

// This is the place to include plugins. See API documentation for a thorough guide on plugins.
const plugins = [
  `medusa-fulfillment-manual`,
  `medusa-payment-manual`,
  {
    resolve: 'medusa-payment-paypal',
    options: {
      sandbox: true,
      client_id: process.env.PP_CLIENT_ID,
      client_secret: process.env.PP_CLIENT_SECRET,
    },
  }
];

module.exports = {
  projectConfig: {
    redis_url: REDIS_URL,
    database_url: DATABASE_URL,
    database_type: "postgres",
    store_cors: STORE_CORS,
    admin_cors: ADMIN_CORS,
  },
  plugins: plugins,
};
