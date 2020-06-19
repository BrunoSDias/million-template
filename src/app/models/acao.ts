import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment'

export class Acao {
  constructor(public http :HttpClient){}

  public _id: string
  public nome_empresa: string
  public cod_empresa: string
  public taxa_juros: number
  public tipo: string

  static todos(http, callback) :void {
    http.get(`${environment.acaoApi}/acoes.json`, {headers: new HttpHeaders({'token': '123456'})}).subscribe((acoes :Acao[])=>{
      callback.call(null, acoes)
    }, (error: HttpErrorResponse) => {
      callback.call(null, null)
    });
  }
}