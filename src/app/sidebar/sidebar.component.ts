import { Component, OnInit } from "@angular/core";

declare var $: any;

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: "lista", title: "Lista de heróis", icon: "ti-panel", class: "" },
  { path: "favoritos", title: "Heróis favoritos", icon: "ti-star", class: "" },
  { path: "newuser", title: "Cadastrar", icon: "ti-user", class: "" }
];

@Component({
  moduleId: module.id,
  selector: "sidebar-cmp",
  templateUrl: "sidebar.component.html"
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isNotMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
