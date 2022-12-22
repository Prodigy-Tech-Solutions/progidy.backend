import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { SupplierModule } from './supplier/supplier.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AdminModule, SupplierModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
