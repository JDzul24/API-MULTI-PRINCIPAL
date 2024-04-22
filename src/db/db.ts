import dotenv from "dotenv";
import mysql from "mysql2/promise";
import { Signale } from "signale";

dotenv.config();
const sigoptions = {
    secrets: ["([0-9]{4}-?)+"]
}
const signale = new Signale(sigoptions);

const dbconfig = {
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DB,
    password: process.env.DB_PSW,
    connectionLimit: 10,
};

const pool = mysql.createPool(dbconfig)

export async function query(sql: string, params: any[]){
    try {
        const conn = await pool.getConnection();
        signale.success("Success connection to DB");
        const result = await conn.execute(sql, params);
        conn.release();
        return result;
    } catch (error) {
        signale.error(error);
        return null;
    }
}