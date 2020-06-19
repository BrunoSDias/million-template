import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

// import { Tesouro } from '../../../models/tesouro'

@Component({
  selector: 'app-tesouro',
  templateUrl: './tesouro.component.html',
  styleUrls: ['./tesouro.component.css']
})
export class TesouroComponent implements OnInit {
  // tesouros: Tesouro[]
  // tesouroDestaque: Tesouro

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    // this.loadTesouros()
  }

  // loadTesouros(): void {
  //   Tesouro.todos(this.http, (tesouros)=> {
  //     this.tesouros = tesouros
  //     if (this.tesouros)
  //       this.tesouroDestaque = this.tesouros[0]
  //   })
  // }


}
