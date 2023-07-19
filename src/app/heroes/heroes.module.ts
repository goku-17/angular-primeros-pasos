import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListComponent } from "./list/list.component";
import { HeroComponent } from "./hero/hero.component";




@NgModule({
declarations:[
  HeroComponent,
  ListComponent,
],
exports: [
  HeroComponent,
  ListComponent,
],
//Cuando ocupamos directivas debemos ocupar CommonModule
imports: [
  CommonModule
]
})
export  class HeroesModule {

}
