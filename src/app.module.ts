import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './auth/jwt.strategy';
import { UserEntity } from './user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1443,
      username: 'sa',
      password: 'Rpassw!1',
      database: 'truck_app',
      // entities: [__dirname + '/**/*.entities{.ts,.js}'],
      entities: [UserEntity],
      synchronize: true, //use this with development enviroment
      options: { encrypt: false },
      logging: true,
    }),
    AuthModule,
    PassportModule,
    UserModule,
    JwtModule.register({ secret: 'secrete', signOptions: { expiresIn: '1h' } }),
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService, JwtStrategy],
})
export class AppModule {}

