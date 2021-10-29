import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeprofilePageRoutingModule } from './homeprofile-routing.module';

import { HomeprofilePage } from './homeprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeprofilePageRoutingModule
  ],
  declarations: [HomeprofilePage]
})
export class HomeprofilePageModule {}
