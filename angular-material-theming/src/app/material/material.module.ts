import { NgModule } from '@angular/core';
import {

  MatFormFieldModule,
  MatInputModule,
  MatCardModule

} from "@angular/material";


const MATERIAL_MODULES = [
  MatFormFieldModule,
  MatInputModule,
  MatCardModule
];

@NgModule({
  imports: [
    MATERIAL_MODULES
  ],
  exports: [
    MATERIAL_MODULES
  ]
})
export class MaterialModule { }
