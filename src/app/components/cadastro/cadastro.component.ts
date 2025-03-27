import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  formulario = this.fb.group({
    nome: ['', Validators.required],
    idade: [''],
    genero: ['masculino'],
    ativo: [true]
  });

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  salvar() {
    if (this.formulario.valid) {
      console.log('Dados salvos:', this.formulario.value);
      this.snackBar.open('Cliente salvo com sucesso!', 'Fechar', {
        duration: 3000
      });
      this.router.navigate(['/listagem']);
    }
  }

  cancelar() {
    this.router.navigate(['/listagem']);
  }
}