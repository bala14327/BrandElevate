import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../features/notifications/notification.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  showNotifications = false;
  unreadCount = 0;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.unreadCount = this.notificationService.getUnreadCount();
  }

  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications;
  }
}
