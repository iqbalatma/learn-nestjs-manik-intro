import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';


@Module({
  imports: [UsersModule, PostModule, AuthModule,
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: () => ({
          type: "postgres",
          entities: [User],
          synchronize: true,
          host: "localhost",
          port: 5432,
          username: "iqbalatma",
          password: "lnfavjem",
          database: "nestjs"
      }),
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
