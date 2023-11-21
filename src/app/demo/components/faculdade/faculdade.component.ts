import { Component } from '@angular/core';

@Component({
  selector: 'app-faculdade',
  templateUrl: './faculdade.component.html',
  styleUrls: ['./faculdade.component.scss']
})
export class FaculdadeComponent {
novoEvento: any;
adicionarEvento() {
throw new Error('Method not implemented.');
}

}

export class AgendaComponent {
  eventos: string[] = ['Reunião', 'Almoço', 'Aula', 'Exercício'];
  novoEvento: string = '';

  adicionarEvento() {
    if (this.novoEvento.trim() !== '') {
      this.eventos.push(this.novoEvento);
      this.novoEvento = ''; // Limpa o campo após a adição
    }
  }
}
