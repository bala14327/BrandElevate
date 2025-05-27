import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NotificationsComponent } from './features/notifications/notifications.component';
import { NotificationService } from './features/notifications/notification.service';

@NgModule({
  declarations: [
    AppComponent,
    NotificationsComponent,
    // other components
  ],
  imports: [
    BrowserModule,
    // other modules
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
