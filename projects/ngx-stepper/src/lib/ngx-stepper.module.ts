import { NgModule } from '@angular/core';
import { NgxStepperComponent } from './components/ngx-stepper/ngx-stepper.component';
import { NgxStepperService } from './services/ngx-stepper.service';

@NgModule({
  declarations: [NgxStepperComponent],
  imports: [],
  exports: [NgxStepperComponent],
  providers: [NgxStepperService],
})
export class NgxStepperModule {}
