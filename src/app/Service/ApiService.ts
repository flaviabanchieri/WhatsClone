import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Message } from '../Models/ListaChat';
import { ChatMessage } from '../Models/ChatMessage';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getItems<T>(): Observable<Message[]> {
    return this.http.get<Message[]>('https://advtasker-n8n.7jlhvw.easypanel.host/webhook/obterListaChat');
  }

  getConversa<T>(numero: string): Observable<ChatMessage[]> {
    const params = new HttpParams().set('numero', numero);
  
    return this.http.get<ChatMessage[]>('https://advtasker-n8n.7jlhvw.easypanel.host/webhook/obterConversa', { params });
  }

}
