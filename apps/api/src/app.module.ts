import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtworksModule } from './artworks/artworks.module';

@Module({
  imports: [ArtworksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
