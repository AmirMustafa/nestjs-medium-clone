import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { TagModule } from '@app/tag/tag.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Tag } from './tag/tag.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: '.local.env',
          // envFilePath: ".prod.env",
        }),
      ],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('HOST'),
        port: +configService.get('PORT'),
        username: configService.get('USERNAME'),
        password: configService.get('PASSWORD'),
        database: configService.get('DATABASE'),
        entities: [Tag],
        // entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: configService.get<boolean>('SYNC'),
      }),
      inject: [ConfigService],
    }),
    TagModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
