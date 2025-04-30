import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../Service/ApiService';
import {ChatMessage} from '../../Models/ChatMessage';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule, MatButtonModule, CommonModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: ChatMessage[] = [];
  newMessage: string = '';
  numero: string = '';

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.numero = params['id'];
      this.loadMessages();
    });
  }



  loadMessages(): void {
    this.apiService.getConversa(this.numero).subscribe(
      (response: ChatMessage[]) => {

        console.log(response)
        this.messages = response.filter(m => m.message);
      },
      (error) => {
        console.error('Erro ao carregar mensagens:', error);
      }
    );
  }
}