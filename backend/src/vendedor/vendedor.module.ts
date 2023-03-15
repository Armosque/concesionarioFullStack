import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VendedorSchema } from './schemas/vendedor.schema';
import { VendedorController } from './vendedor.controller';
import { VendedorService } from './vendedor.service';

@Module({
  imports:[MongooseModule.forFeature([{
    name:"Vendedor", schema:VendedorSchema

  }])],
  controllers: [VendedorController],
  providers: [VendedorService]
})
export class VendedorModule {}
