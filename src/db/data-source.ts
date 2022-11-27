// import { Tag } from '@app/tag/tag.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  migrationsTableName: 'migrations',
  type: 'postgres',
  host: process.env.HOST,
  port: +process.env.PORT,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  migrations: [__dirname + '\\migrations\\**\\*{.ts,.js}'],

  // entities: [Tag],
  // entities: [__dirname + '/**/*.entity{.ts,.js}'],
  // migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
  //   cli: {
  //     migrationsDir: __dirname + '/../database/migrations',
  //   },
  // extra: {
  //   charset: 'utf8mb4_unicode_ci',
  // },
  logging: true,
  synchronize: false,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;

// export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
//   useFactory: async (): Promise<TypeOrmModuleOptions> => {
//     return {
//       type: 'postgres',
//       host: process.env.HOST,
//       port: +process.env.PORT,
//       username: process.env.USERNAME,
//       password: process.env.PASSWORD,
//       database: process.env.DATABASE,
//       // entities: [Tag],
//       entities: [__dirname + '/**/*.entity{.ts,.js}'],
//       migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
//       //   cli: {
//       //     migrationsDir: __dirname + '/../database/migrations',
//       //   },
//       extra: {
//         charset: 'utf8mb4_unicode_ci',
//       },

//       synchronize: true,
//       logging: true,
//     };
//   },
// };
