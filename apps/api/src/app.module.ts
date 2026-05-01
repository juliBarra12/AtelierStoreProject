import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtworksModule } from './artworks/artworks.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(),'images'),
      serveRoot: '/images'
    }),
    PrismaModule,
    ArtworksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
