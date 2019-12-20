import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// head
import  { HeadModule } from './head/head.module';

// footer
import { FooterModule } from './footer/footer.module';

// body
import { BodyModule } from './body/body.module';

//Servicio
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

     // head
     HeadModule,
    
     // body
     BodyModule,
 
     // footer
     FooterModule,

     //servicio
     HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
