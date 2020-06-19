import { Component, OnInit } from '@angular/core'
import { Cliente } from 'src/app/models/cliente'

import { Sessao } from '../../services/sessao'

@Component({
  selector: 'app-informativo',
  templateUrl: './informativo.component.html',
  styleUrls: ['./informativo.component.css']
})
export class InformativoComponent implements OnInit {
  cliente: Cliente

  constructor() { }

  ngOnInit(): void {
    this.cliente = Sessao.getCliente()
  }

}
