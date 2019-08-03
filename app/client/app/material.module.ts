
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatCheckboxModule, MatButtonModule,
  MatDividerModule, MatInputModule, MatChipsModule, MatCardModule, MatDialogModule, 
  MatFormFieldModule, MatDatepickerModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

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
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  FormsModule,
  ReactiveFormsModule,
  MatDatepickerModule,
  MatMomentDateModule
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
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  FormsModule,
  ReactiveFormsModule,
  MatDatepickerModule,
  MatMomentDateModule
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
