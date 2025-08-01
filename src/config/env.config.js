require("dotenv").config("../../env");

export default {
    PORT : process.env.PORT,
    JWTSecret: process.env.JWTSecret,
    Base_URL: process.env.Base_URL,
    sourceEmail: process.env.sourceEmail,
    adminUser: process.env.adminUser,
    adminEmail: process.env.adminEmail,
    adminPassword: process.env.adminPassword,
    db_name: process.env.db_name,
    db_password: process.env.db_password
}