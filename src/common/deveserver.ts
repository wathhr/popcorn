export interface Message {
  hello: {
    roles: [string, ...string[]],
    nonce: number,
  },
  stop: never,
  reload: {
    file: string,
    content: string,
  },
}

export interface MessageResponse<T extends keyof Message = keyof Message> {
  type: T,
  data: Message[T],
}

export const is = <T extends keyof Message>(json: MessageResponse, type: T): json is MessageResponse<T> => json.type === type;
export function parse(text: string): MessageResponse {
  try {
    return JSON.parse(text);
  } catch {
    throw new Error(`Invalid JSON: ${text}`);
  }
}
