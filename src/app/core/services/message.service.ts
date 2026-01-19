import { Injectable } from "@angular/core";
import { MESSAGES } from "../constants/messages";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public translate(messageCode: string): string {
    if (this.hasTranslation(messageCode)) {
      return MESSAGES[messageCode];
    }
    
    return messageCode;
  }

  private hasTranslation(messageCode: string): boolean {
    return messageCode in MESSAGES;
  }
}