import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "newuser-cmp",
  moduleId: module.id,
  templateUrl: "newuser.component.html"
})
export class NewUserComponent implements OnInit {
  model = {
    nome: "",
    descricao: "",
    foto: "",
    flagfavorito: false
  };
  form: FormGroup;

  @ViewChild("fileInput") fileInput: ElementRef;

  erroNome: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.erroNome = false;
  }

  uploadImagem(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.model.foto = reader.result.toString();
      };
    }
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
