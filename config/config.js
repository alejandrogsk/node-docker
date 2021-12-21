module.exports = {
    MONGO_IP: process.env.DB_IP,
    MONGO_NAME: process.env.DB_ADMIN_NAME,
    MONGO_PASSWORD: process.env.DB_ADMIN_PASSWORD,
    MONGO_PORT: process.env.DB_PORT,
    MONGO_AUTH: process.env.DB_AUTH,
    SESSION_SECRET: process.env.SESSION_SECRET || "somesecretkey"
}