import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  searchQuery: string = '';

  constructor(private router: Router) {}

  goToHistory() {
    this.router.navigate(['/history']);
  }

  newChat() {
    this.searchQuery = '';
  }
  
  submitPrompt() {
    alert('Prompt submitted: ' + this.searchQuery);
  }

  uploadMedia() {
    alert('Upload Media clicked');
  }

  pasteText() {
    navigator.clipboard.readText().then(text => {
      this.searchQuery = text;
    }).catch(err => {
      alert('Failed to paste: ' + err);
    });
  }







