import { Component } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {
  displayedColumns: string[] = ['nome', 'acoes'];
  dataSource = [
    { nome: 'Item 1', tipo: 'Tipo A' },
    { nome: 'Item 2', tipo: 'Tipo B' }
  ];

  editarItem(item: any) {
    console.log('Editar:', item);
  }
}