import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment'

export class Cliente {
  constructor(public http :HttpClient){}

  public _id: string
  public nome: string
  public sobrenome: string
  public cpf: string
  public login: string = ""
  public senha: string = ""
  public createat: string
  public updatetat: string

  public Todos() :Cliente[] {
    return[];
  }

  fazerLogin(callback): void {
    this.http.post(`${environment.clienteApi}/cliente/login`, this, {headers: new HttpHeaders({'token': environment.token})}).subscribe((cliente :Cliente)=>{
      callback.call(null, cliente)
    }, (error: HttpErrorResponse) => {
      callback.call(null, null)
    });
  }
}