import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [UsersModule, PostModule, AuthModule,
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: () => ({
          type: "postgres",
          entities: [],
          synchronize: true,
          host: "localhost",
          port: 5432,
          password: "lnfavjem",
          database: "nest"
      }),
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
