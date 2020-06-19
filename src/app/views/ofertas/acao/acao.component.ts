import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Acao } from '../../../models/acao'

@Component({
  selector: 'app-acao',
  templateUrl: './acao.component.html',
  styleUrls: ['./acao.component.css']
})
export class AcaoComponent implements OnInit {
  acoes: Acao[]
  acaoDestaque: Acao

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.loadAcoes()
  }

  loadAcoes(): void {
    Acao.todos(this.http, (acoes)=> {
      this.acoes = acoes
      if (this.acoes)
        this.acaoDestaque = this.acoes[0]
    })
  }



}
