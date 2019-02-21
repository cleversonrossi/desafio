import { Routes } from "@angular/router";

import { UserComponent } from "./user/user.component";
import { NewUserComponent } from "./newuser/newuser.component";
import { EditUserComponent } from "./edituser/edituser.component";
import { TableComponent } from "./table/table.component";
import { FavoritosComponent } from "./favoritos/favoritos.component";

export const AppRoutes: Routes = [
  {
    path: "",
    redirectTo: "lista",
    pathMatch: "full"
  },
  {
    path: "newuser",
    component: NewUserComponent
  },
  {
    path: "user/:nome",
    component: UserComponent
  },
  {
    path: "edituser/:nome",
    component: EditUserComponent
  },
  {
    path: "lista",
    component: TableComponent
  },

  {
    path: "favoritos",
    component: FavoritosComponent
  },
  {
    path: "**",
    redirectTo: "lista"
  },
  { path: "404", component: TableComponent, pathMatch: "full" }
];
