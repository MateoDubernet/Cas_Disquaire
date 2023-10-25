import mysql, {Connection} from 'mysql2'
import { Table } from './table';

export class DataBase {

    private dataBaseConnection: Connection;

    constructor(){}

    createDataBase(name: string){
        this.connectToDatabase();

        return new Promise((result, reject) => {
            this.dataBaseConnection.query(`CREATE DATABASE IF NOT EXISTS ${name}`, (error, data) => {
                if (error){ reject(error) } 
                else { result(data) } 
            })
        })
    }

    createTable(databaseName: string, table: Table){
        this.dataBaseConnection.query(`USE ${databaseName}`)

        return new Promise((result, reject) => {
            let createTable = `CREATE TABLE IF NOT EXISTS ${table.name} `
            let createColumn = `(`
            table.columns.forEach(column => {
                createColumn += column
            });

            createTable += `${createColumn})`

            this.dataBaseConnection.query(createTable, (error, data) => {
                if (error){ reject(error) } 
                else { result(data) } 
            })
        })
    }

    connectToDatabase(){
        this.dataBaseConnection = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: "root"
        })
    }
}