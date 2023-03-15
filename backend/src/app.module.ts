import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutomovilModule } from './automovil/automovil.module';
import { ClienteModule } from './cliente/cliente.module';
import { VendedorModule } from './vendedor/vendedor.module';
import{MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [AutomovilModule, ClienteModule, VendedorModule, MongooseModule.forRoot('mongodb+srv://armosque:243924@cluster0.1cgszjy.mongodb.net/?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
