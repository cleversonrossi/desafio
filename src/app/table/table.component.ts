import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: "table-cmp",
  moduleId: module.id,
  templateUrl: "table.component.html"
})
export class TableComponent implements OnInit {
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
    let url = "https://desafio-super-herois.herokuapp.com/herois";

    this.http.get(url).subscribe(res => {
      let response = Object.keys(res).map(key => {
        return [res[key].idheroi, res[key].nome, res[key].flagfavorito];
      });

      this.tableData = {
        headerRow: ["ID", "Nome", "Favoritar"],
        dataRows: response
      };
    });
  }

  visualizar(heroi) {
    const nome = heroi[1];

    this.router.navigate(["user/", nome]);
  }

  favoritar(heroi) {
    const id = heroi[0],
      isFavorito = heroi[2],
      newFlagFavorito = !isFavorito;

    this.http
      .put(
        `https://desafio-super-herois.herokuapp.com/herois/${id}/flagfavorito`,
        newFlagFavorito.toString(),
        {
          headers: new HttpHeaders().set("Content-Type", "application/json")
        }
      )
      .subscribe(res => {
        window.location.reload();
      });
  }

  editar(heroi) {
    const nome = heroi[1];

    this.router.navigate(["edituser/", nome]);
  }

  excluir(heroi) {
    const id = heroi[0];

    this.http
      .delete(`https://desafio-super-herois.herokuapp.com/herois/${id}`, {
        headers: new HttpHeaders().set("Content-Type", "application/json")
      })
      .subscribe(res => {
        window.location.reload();
      });
  }

  cadastrar() {
    this.router.navigate(["/newuser"]);
  }
}
