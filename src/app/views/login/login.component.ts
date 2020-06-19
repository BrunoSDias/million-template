import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'

import { Cliente } from 'src/app/models/cliente'
import { Sessao } from 'src/app/services/sessao'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(
    private http :HttpClient,
    private router :Router
  ) {

   }

  cliente :Cliente
  mensagem :string = ""

  ngOnInit(): void {
    this.cliente = new Cliente(this.http)
    if (Sessao.getCliente()) {
      this.router.navigateByUrl("/home")
    }
  }

  fazerLogin() {
    if (this.cliente.login == "") {
      this.mensagem = "Preencha o login"
      return
    }

    if (this.cliente.senha == "") {
      this.mensagem = "Preencha a senha"
      return
    }

    this.cliente.fazerLogin((cliente :Cliente) => {
      if (!cliente) {
        this.mensagem = "Login ou senha inválido!";
        setTimeout(() => {
          this.mensagem = ""
        }, 3000)
        return
      }

      Sessao.setCliente(cliente)
      this.router.navigateByUrl("/home")
    })
  }
}
