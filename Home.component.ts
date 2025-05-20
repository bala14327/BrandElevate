import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedDate: string = '';
  searchQuery: string = '';
  sortOption: string = '';
  
  dummyChats = [
    {
      prompt: 'Create an ad for a summer shoe sale',
      response: 'Buy one, get one free on all summer shoes!',
      date: '2025-05-20'
    },
    {
      prompt: 'Promote our eco-friendly shampoo',
      response: 'Go green with our all-natural shampoo, now 20% off!',
      date: '2025-05-21'
    }
  ];

  get filteredChats() {
    return this.dummyChats
      .filter(chat =>
        (!this.searchQuery || chat.prompt.toLowerCase().includes(this.searchQuery.toLowerCase())) &&
        (!this.selectedDate || chat.date === this.selectedDate)
      )
      .sort((a, b) => {
        if (this.sortOption === 'newest') return b.date.localeCompare(a.date);
        if (this.sortOption === 'oldest') return a.date.localeCompare(b.date);
        return 0;
      });
  }

  startOver(chat: any) {
    alert(`Restarting chat for prompt: ${chat.prompt}`);
  }

  edit(chat: any) {
    alert(`Editing chat: ${chat.prompt}`);
  }

  save(chat: any) {
    alert(`Saving chat: ${chat.prompt}`);
  }

  share(chat: any) {
    alert(`Sharing chat: ${chat.prompt}`);
  }

  copy(chat: any) {
    navigator.clipboard.writeText(chat.response);
    alert(`Copied response to clipboard.`);
  }
}
