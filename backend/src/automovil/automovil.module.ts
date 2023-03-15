import { Module } from '@nestjs/common';
import { AutomovilController } from './automovil.controller';
import { AutomovilService } from './automovil.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AutomovilSchema } from './schemas/automovil.schema';

@Module({
  imports:[MongooseModule.forFeature([{
    name:"Automovil", schema:AutomovilSchema
  }])],
  controllers: [AutomovilController],
  providers: [AutomovilService]
})
export class AutomovilModule {}
