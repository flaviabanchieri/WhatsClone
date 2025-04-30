export class ChatMessage {
  id: string;
  key: ChatMessageKey;
  pushName: string;
  participant: string | null;
  messageType: 'audioMessage' | 'imageMessage' | 'conversation' | 'videoMessage' | 'reactionMessage';
  message: ChatMessageContent;
  contextInfo: {
    isForwarded: boolean;
    forwardingScore: number;
  };
  source: 'web' | 'ios';
  messageTimestamp: number;
  chatwootMessageId: string | null;
  chatwootInboxId: string | null;
  chatwootConversationId: string | null;
  chatwootContactInboxSourceId: string | null;
  chatwootIsRead: boolean | null;
  instanceId: string;
  webhookUrl: string | null;
  sessionId: string | null;
  status: 'ERROR' | 'READ';
  remotejid: string;

  constructor(
    id: string,
    key: ChatMessageKey,
    pushName: string,
    participant: string | null,
    messageType: 'audioMessage' | 'imageMessage' | 'conversation'| 'videoMessage' | 'reactionMessage',
    message: ChatMessageContent,
    contextInfo: { isForwarded: boolean; forwardingScore: number },
    source: 'web' | 'ios',
    messageTimestamp: number,
    chatwootMessageId: string | null,
    chatwootInboxId: string | null,
    chatwootConversationId: string | null,
    chatwootContactInboxSourceId: string | null,
    chatwootIsRead: boolean | null,
    instanceId: string,
    webhookUrl: string | null,
    sessionId: string | null,
    status: 'ERROR' | 'READ',
    remotejid: string
  ) {
    this.id = id;
    this.key = key;
    this.pushName = pushName;
    this.participant = participant;
    this.messageType = messageType;
    this.message = message;
    this.contextInfo = contextInfo;
    this.source = source;
    this.messageTimestamp = messageTimestamp;
    this.chatwootMessageId = chatwootMessageId;
    this.chatwootInboxId = chatwootInboxId;
    this.chatwootConversationId = chatwootConversationId;
    this.chatwootContactInboxSourceId = chatwootContactInboxSourceId;
    this.chatwootIsRead = chatwootIsRead;
    this.instanceId = instanceId;
    this.webhookUrl = webhookUrl;
    this.sessionId = sessionId;
    this.status = status;
    this.remotejid = remotejid;
  }
}

class ChatMessageKey {
  id: string;
  fromMe: boolean;
  remoteJid: string;

  constructor(id: string, fromMe: boolean, remoteJid: string) {
    this.id = id;
    this.fromMe = fromMe;
    this.remoteJid = remoteJid;
  }
}

class ChatMessageContent {
  audioMessage?: AudioMessage;
  imageMessage?: ImageMessage;
  videoMessage?: VideoMessage;
  conversation?: string;
  messageContextInfo?: MessageContextInfo;

  constructor(
    audioMessage?: AudioMessage,
    imageMessage?: ImageMessage,
    conversation?: string,
    messageContextInfo?: MessageContextInfo
  ) {
    this.audioMessage = audioMessage;
    this.imageMessage = imageMessage;
    this.conversation = conversation;
    this.messageContextInfo = messageContextInfo;
  }
}

class AudioMessage {
  url: string;
  seconds: number;
  mediaKey: string;
  mimetype: string;
  waveform: string;
  directPath: string;
  fileLength: string;
  fileSha256: string;
  contextInfo: {
    isForwarded: boolean;
    forwardingScore: number;
  };
  fileEncSha256: string;
  streamingSidecar: string;
  mediaKeyTimestamp: number;

  constructor(
    url: string,
    seconds: number,
    mediaKey: string,
    mimetype: string,
    waveform: string,
    directPath: string,
    fileLength: string,
    fileSha256: string,
    contextInfo: { isForwarded: boolean; forwardingScore: number },
    fileEncSha256: string,
    streamingSidecar: string,
    mediaKeyTimestamp: number
  ) {
    this.url = url;
    this.seconds = seconds;
    this.mediaKey = mediaKey;
    this.mimetype = mimetype;
    this.waveform = waveform;
    this.directPath = directPath;
    this.fileLength = fileLength;
    this.fileSha256 = fileSha256;
    this.contextInfo = contextInfo;
    this.fileEncSha256 = fileEncSha256;
    this.streamingSidecar = streamingSidecar;
    this.mediaKeyTimestamp = mediaKeyTimestamp;
  }
}

class ImageMessage {
  url: string;
  width: number;
  height: number;
  mediaKey: string;
  mimetype: string;
  directPath: string;
  fileLength: string;
  fileSha256: string;
  scanLengths: number[];
  scansSidecar: string;
  fileEncSha256: string;
  firstScanLength: number;
  firstScanSidecar: string;
  mediaKeyTimestamp: number;
  midQualityFileSha256: string;

  constructor(
    url: string,
    width: number,
    height: number,
    mediaKey: string,
    mimetype: string,
    directPath: string,
    fileLength: string,
    fileSha256: string,
    scanLengths: number[],
    scansSidecar: string,
    fileEncSha256: string,
    firstScanLength: number,
    firstScanSidecar: string,
    mediaKeyTimestamp: number,
    midQualityFileSha256: string
  ) {
    this.url = url;
    this.width = width;
    this.height = height;
    this.mediaKey = mediaKey;
    this.mimetype = mimetype;
    this.directPath = directPath;
    this.fileLength = fileLength;
    this.fileSha256 = fileSha256;
    this.scanLengths = scanLengths;
    this.scansSidecar = scansSidecar;
    this.fileEncSha256 = fileEncSha256;
    this.firstScanLength = firstScanLength;
    this.firstScanSidecar = firstScanSidecar;
    this.mediaKeyTimestamp = mediaKeyTimestamp;
    this.midQualityFileSha256 = midQualityFileSha256;
  }
}


class VideoMessage {
  url: string;
  width: number;
  height: number;
  seconds: number;
  mediaKey: string;
  mimetype: string;
  directPath: string;
  fileLength: string;
  fileSha256: string;
  fileEncSha256: string;
  thumbnailSha256: string;
  streamingSidecar: string;
  mediaKeyTimestamp: string;
  thumbnailEncSha256: string;
  thumbnailDirectPath: string;

  constructor(
    url: string,
    width: number,
    height: number,
    seconds: number,
    mediaKey: string,
    mimetype: string,
    directPath: string,
    fileLength: string,
    fileSha256: string,
    fileEncSha256: string,
    thumbnailSha256: string,
    streamingSidecar: string,
    mediaKeyTimestamp: string,
    thumbnailEncSha256: string,
    thumbnailDirectPath: string,

  ) {
    this.url = url;
    this.width = width;
    this.height = height;
    this.seconds = seconds;
    this.mediaKey = mediaKey;
    this.mimetype = mimetype;
    this.directPath = directPath;
    this.fileLength = fileLength;
    this.fileSha256 = fileSha256;
    this.fileEncSha256 = fileEncSha256;
    this.thumbnailSha256 = thumbnailSha256;
    this.streamingSidecar = streamingSidecar;
    this.mediaKeyTimestamp = mediaKeyTimestamp;
    this.thumbnailEncSha256 = thumbnailEncSha256;
    this.thumbnailDirectPath = thumbnailDirectPath;
  }
}

class MessageContextInfo {
  messageSecret: string;
  deviceListMetadata?: DeviceListMetadata;

  constructor(messageSecret: string, deviceListMetadata?: DeviceListMetadata) {
    this.messageSecret = messageSecret;
    this.deviceListMetadata = deviceListMetadata;
  }
}

class DeviceListMetadata {
  senderKeyHash: string;
  senderTimestamp: string;
  recipientKeyHash: string;
  recipientTimestamp: string;

  constructor(
    senderKeyHash: string,
    senderTimestamp: string,
    recipientKeyHash: string,
    recipientTimestamp: string
  ) {
    this.senderKeyHash = senderKeyHash;
    this.senderTimestamp = senderTimestamp;
    this.recipientKeyHash = recipientKeyHash;
    this.recipientTimestamp = recipientTimestamp;
  }
}
