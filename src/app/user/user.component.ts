import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "user-cmp",
  moduleId: module.id,
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {
  model = {
    nome: "",
    descricao: "",
    foto: ""
  };

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    let result: any = {};
    this.route.snapshot.pathFromRoot.forEach(item => {
      item.paramMap.keys.forEach(key => {
        result[key] = item.paramMap.get(key);
      });
    });

    this.getHeroi(result.nome);
  }

  getHeroi(nome) {
    this.http
      .get(
        `https://desafio-super-herois.herokuapp.com/herois/buscaNome?nome=${nome}`
      )
      .subscribe(res => {
        this.model = res[0];
      });
  }
}
