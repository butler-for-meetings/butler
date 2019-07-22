
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatDividerModule, MatInputModule } from '@angular/material';

const imports = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatDividerModule,
  MatInputModule,
  FlexLayoutModule
];

const exportsModules = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatDividerModule,
  MatInputModule,
  FlexLayoutModule
];

@NgModule({
  imports: [
    ...imports
  ],
  exports: [
    ...exportsModules
  ]
})
export class MaterialModule { }
