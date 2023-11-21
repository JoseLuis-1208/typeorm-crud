import { DataSource } from "typeorm";
import { User } from "./entities/user"


export const appDataSource = new DataSource({
    type: 'postgres',//tipo de base de datos
    host: 'localhost',
    username: 'postgres',
    password: '120809',
    port: 5432,
    database: 'typeormdb',
    entities: [User],
    logging: true,
    synchronize: true
})