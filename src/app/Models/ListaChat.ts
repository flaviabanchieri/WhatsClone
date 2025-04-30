export interface Message {
    id: string;
    remoteJid: string;
    labels: string | null;
    createdAt: string; // ou Date, dependendo de como você deseja tratar as datas
    updatedAt: string; // ou Date, dependendo de como você deseja tratar as datas
    instanceId: string;
    name: string;
    unreadMessages: number;
    remotejid: string; // Parece que `remoteJid` e `remotejid` têm o mesmo valor, mas com nomes diferentes, escolha um ou remova a redundância
  }