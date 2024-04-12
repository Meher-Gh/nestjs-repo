import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { SongsController } from './songs/songs.controller';

@Module({
  imports: [SongsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('songs') // middleware run only for /songs
    // consumer.apply(LoggerMiddleware).forRoutes({path: "songs", method:RequestMethod.POST}) // run for post method
    // consumer.apply(LoggerMiddleware).forRoutes(SongsController) // run for the songs controller
  }
}
