import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment'

export class Acao {
  constructor(public http :HttpClient){}

  public _id: string
  public nome_empresa: string
  public cod_empresa: string
  public taxa_juros: number
  public tipo: string

  public static async todos(http:HttpClient) {
   return await http.get<Acao[]>(`${environment.acaoApi}/acoes.json`, {headers: new HttpHeaders({'token': environment.token})}).toPromise()
  }
}