import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {BookModule} from './book/book.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigService, ConfigModule} from "@nestjs/config"
import * as process from "node:process";

@Module({
    imports: [
        BookModule,
        ConfigModule.forRoot(),
        TypeOrmModule.forRootAsync({
            imports: [
                ConfigModule
            ],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get('DB_HOST'),
                port: configService.get('DB_PORT'),
                username: configService.get('DB_USERNAME'),
                password: configService.get('DB_PASSWORD'),
                database: configService.get('DB_NAME'),
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: true,
            }),
            inject: [ConfigService],
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})

export class AppModule {
}
