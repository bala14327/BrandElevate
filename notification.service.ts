import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Notification } from './notification.model';

@Injectable()
export class NotificationService {
  private notifications: Notification[] = [
    {
      id: 1,
      title: 'Welcome!',
      message: 'Thank you for joining BrandElevate.',
      timestamp: new Date(),
      read: false
    },
    {
      id: 2,
      title: 'New Feature',
      message: 'Try out the new Ad Editor!',
      timestamp: new Date(),
      read: false
    }
  ];

  getNotifications(): Observable<Notification[]> {
    return of(this.notifications);
  }

  markAllAsRead(): void {
    this.notifications.forEach(n => n.read = true);
  }

  getUnreadCount(): number {
    return this.notifications.filter(n => !n.read).length;
  }
}
