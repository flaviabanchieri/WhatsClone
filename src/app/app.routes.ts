import { Routes } from '@angular/router';
import { ChatListComponent } from './ListaChat/ChatList/chat-list.component';
import { ChatComponent } from './Conversa/chat/chat.component';

export const routes: Routes = [
    { path: '', component: ChatListComponent },
    { path: 'chat/:id', component: ChatComponent },
  ];
  