import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  item = {
    nome: '',
    tipo: '',
    ativo: false,
    opcao: 'Opção 1'
  };

  constructor(private snackBar: MatSnackBar, private router: Router) {}

  salvar() {
    console.log('Dados salvos:', this.item);
    this.snackBar.open('Cadastro salvo com sucesso!', 'Fechar', {
      duration: 3000
    });
    this.router.navigate(['/']);
  }
}