import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtworksModule } from './artworks/artworks.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','images'),
      serveRoot: '/images'
    }),
    ArtworksModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
