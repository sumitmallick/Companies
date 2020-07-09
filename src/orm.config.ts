import {TypeOrmModuleOptions} from '@nestjs/typeorm'
export const config: TypeOrmModuleOptions = {
    type:'postgres',
    username: 'postgres',
    password: 'password',
    port: 5432,
    host: '127.0.0.1',
    database: 'test',
    synchronize: true,
    entities: ['dist/**/*.entity{.ts, .js}'],
};