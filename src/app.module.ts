import { forwardRef, Module } from '@nestjs/common';
import { dataSourceOptions } from '@app/db/data-source';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { TagModule } from '@app/tag/tag.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
// import { Tag } from './tag/tag.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(dataSourceOptions),
    // forwardRef(() => TagModule),
    // TagModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
