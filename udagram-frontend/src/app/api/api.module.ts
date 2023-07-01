import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

const components = [];

@NgModule({
  imports: [HttpClientModule],
  declarations: components,
  exports: components,
  providers: [],
})
export class ApiModule {}
