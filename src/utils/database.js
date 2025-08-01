import { Sequelize, DataTypes } from 'sequelize';
import { Env } from "../config";


export const sequelize = new Sequelize(`postgres://postgres:${Env.db_password}@localhost:5432/${Env.db_name}`,
    { logging: false }
)
