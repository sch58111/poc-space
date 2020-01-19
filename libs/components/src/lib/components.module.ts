import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  MatIconModule,
  MatExpansionModule,
  MatDialogModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmbedVideo } from 'ngx-embed-video';
import { NumberComponent } from './number/number.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    EmbedVideo.forRoot(),
    MatDialogModule
  ],
  declarations: [
    NumberComponent
  ],
  exports: [
    NumberComponent
  ]
})
export class ComponentsModule {}
