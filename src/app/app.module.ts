import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { AppRoutes } from "./app.routing";
import { SidebarModule } from "./sidebar/sidebar.module";
import { NguiMapModule } from "@ngui/map";

import { UserComponent } from "./user/user.component";
import { NewUserComponent } from "./newuser/newuser.component";
import { EditUserComponent } from "./edituser/edituser.component";

import { TableComponent } from "./table/table.component";

import { HttpClientModule } from "@angular/common/http";
import { FavoritosComponent } from "./favoritos/favoritos.component";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NewUserComponent,
    EditUserComponent,
    FavoritosComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    HttpClientModule,
    NguiMapModule.forRoot({
      apiUrl: "https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
