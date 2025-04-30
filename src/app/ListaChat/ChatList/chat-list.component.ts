import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { catchError, map } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ApiService } from '../../Service/ApiService';
import { Message } from '../../Models/ListaChat';

@Component({
  selector: 'app-chat-list',
  standalone: true,
  imports: [RouterLink, MatListModule, MatIconModule, CommonModule],
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
  chats: Message[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getItems().pipe(
      map((response: Message[]) => {
        console.log('Resposta da API:', response); // Verifica a resposta da API
        this.chats = response.filter(c => c.remotejid != '0');  // Armazena a resposta em 'chats'
        return { status: 200, mensagem: 'Carregado com sucesso' };
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Erro ao carregar itens:', error);
        return [];  // Retorna um array vazio no caso de erro
      })
    ).subscribe({
      next: (result) => {
        console.log(result); // Manipula a resposta final
      },
      error: (error) => {
        console.error('Erro no subscribe:', error);
      }
    });
  }
}
