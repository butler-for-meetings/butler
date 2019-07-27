
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatCheckboxModule, MatButtonModule,
  MatDividerModule, MatInputModule, MatChipsModule, MatCardModule } from '@angular/material';

const imports = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatDividerModule,
  MatInputModule,
  FlexLayoutModule,
  MatChipsModule,
  MatCardModule,
  MatCheckboxModule
];

const exportsModules = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatDividerModule,
  MatInputModule,
  FlexLayoutModule,
  MatChipsModule,
  MatCardModule,
  MatCheckboxModule
];

@NgModule({
  imports: [
    ...imports
  ],
  exports: [
    ...exportsModules
  ],
  providers: [
    MatSidenavModule
  ]
})
export class MaterialModule { }
