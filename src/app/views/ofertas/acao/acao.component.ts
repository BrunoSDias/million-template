import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Acao } from '../../../models/acao'

@Component({
  selector: 'app-acao',
  templateUrl: './acao.component.html',
  styleUrls: ['./acao.component.css']
})
export class AcaoComponent implements OnInit {
  acaoDestaque: Acao

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.loadAcoes()
  }

  async loadAcoes() {
    const acoes:Acao[] = await Acao.todos(this.http)
    if (acoes.length > 0)
      this.acaoDestaque = acoes[0]
  }



}
