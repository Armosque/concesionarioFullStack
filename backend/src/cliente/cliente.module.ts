import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';
import { ClienteSchema } from './schemas/cliente.schema';

@Module({
  imports:[MongooseModule.forFeature([{
    name:"Cliente", schema:ClienteSchema
  }])],
  controllers: [ClienteController],
  providers: [ClienteService]
})
export class ClienteModule {}
