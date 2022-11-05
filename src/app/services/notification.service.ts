import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    /**
     * BehaviorSubject for notifications
     */
    private notificationSource: BehaviorSubject<string> = new BehaviorSubject<string>('');
    notifications$ = this.notificationSource.asObservable();
    
    /**
     * set text into notifictaions
     * @param  {string} text
     */
    setNotification(text: string) {
        this.notificationSource.next(text);
    }
}