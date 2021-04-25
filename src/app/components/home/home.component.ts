import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nomeProduto: string = 'Curso de Angular';
  anuncio: string = `O ${this.nomeProduto} está em promocao`;
  idProduto: number = 123;
  precoProduto: number = 2.59;
  promocao: boolean = true;
  foto: string = 'assets/img/crud.png';
  dataValidade: string = '2021-12-31';

  listaProdutos: any[] = [
    {nome: 'Curso de Angular',preco: 35.56, validade: '2021-12-31', id:1 },
    {nome: 'Curso de Ionic',preco: 50, validade: '2021-12-31', id:2, promocao: true },
    {nome: 'Curso de Ionic Avançado',preco: 35.56, validade: '2021-12-31', id:3 },
    {nome: 'Curso de Flutter',preco: 45, validade: '2021-11-30', id:4 },
    {nome: 'Curso de Kotlin',preco: 50, validade: '2021-11-31', id:5 }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
