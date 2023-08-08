import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterGokuComponent } from './components/add-character-goku/add-character-goku.component';




@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterGokuComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
