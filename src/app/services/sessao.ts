import { Cliente } from '../models/cliente'

export class Sessao {
  public static setCliente(cliente :Cliente) :void {
    localStorage.setItem("cliente", JSON.stringify(cliente));
  }

  public static getCliente() :Cliente {
    if (!localStorage.getItem("cliente")) return null
    let cliente :Cliente
    cliente = JSON.parse(localStorage.getItem("cliente"))
    return cliente;
  }

  public static removeCliente() :Boolean {
    localStorage.removeItem("cliente")
    if (!localStorage.getItem("cliente")) 
      return true
    else
      return false
  }
}