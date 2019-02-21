import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: "favoritos-cmp",
  moduleId: module.id,
  templateUrl: "favoritos.component.html"
})
export class FavoritosComponent implements OnInit {
  public tableData: TableData;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.tableData = {
      headerRow: ["ID", "Nome"],
      dataRows: []
    };

    this.getHeroes();
  }

  getHeroes() {
    let url = "https://desafio-super-herois.herokuapp.com/herois/favoritos";

    this.http.get(url).subscribe(res => {
      let response = Object.keys(res).map(key => {
        return [res[key].idheroi, res[key].nome];
      });

      this.tableData = {
        headerRow: ["ID", "Nome"],
        dataRows: response
      };
    });
  }
}
