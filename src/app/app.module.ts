import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ClientesComponent } from './views/clientes/clientes.component';
import { LoginComponent } from './views/login/login.component';
import { HeaderComponent } from './views/header/header.component';
import { SidebarComponent } from './views/sidebar/sidebar.component';
import { FooterComponent } from './views/footer/footer.component';
import { OfertasComponent } from './views/ofertas/ofertas.component';
import { AcaoComponent } from './views/ofertas/acao/acao.component';
import { TesouroComponent } from './views/ofertas/tesouro/tesouro.component';
import { FundoComponent } from './views/ofertas/fundo/fundo.component';
import { InformativoComponent } from './views/informativo/informativo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientesComponent,
    LoginComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    OfertasComponent,
    AcaoComponent,
    TesouroComponent,
    FundoComponent,
    InformativoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
