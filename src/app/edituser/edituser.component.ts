import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "edituser-cmp",
  moduleId: module.id,
  templateUrl: "edituser.component.html"
})
export class EditUserComponent implements OnInit {
  model = {
    nome: "",
    descricao: "",
    foto: "",
    flagfavorito: false
  };

  erroNome: boolean = false;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

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

  salvar(e) {
    e.preventDefault();
    e.stopPropagation();
    if (this.model.nome === "" || !this.model.nome) {
      this.erroNome = true;
    } else {
      this.erroNome = false;
    }

    if (this.erroNome) {
      return;
    }

    this.http
      .post(
        "https://desafio-super-herois.herokuapp.com/herois",
        JSON.stringify(this.model),
        {
          headers: new HttpHeaders().set("Content-Type", "application/json")
        }
      )
      .subscribe(res => {
        this.router.navigate(["/lista"]);
      });
  }
}
