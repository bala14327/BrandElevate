import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  selectedDate: string = '';
  searchQuery: string = '';
  sortOption: string = 'newest';
  adsHistory: any[] = [];
  originalAdsHistory: any[] = [];

  ngOnInit(): void {
    this.adsHistory = [
      {
        id: 1,
        userId: 1,
        adType: 'Text',
        promptContent: 'Buy the best shoes',
        responseContent: 'Check out our latest collection!',
        generatedOn: new Date('2024-05-15T10:30:00'),
      },
      {
        id: 2,
        userId: 1,
        adType: 'Image',
        promptContent: 'Beach Vacation',
        responseContent: 'Visual Ad for a beach holiday',
        generatedOn: new Date('2024-05-16T14:45:00'),
      },
      {
        id: 3,
        userId: 2,
        adType: 'Text',
        promptContent: 'Order Food',
        responseContent: 'Hungry? We deliver!',
        generatedOn: new Date('2024-05-16T18:00:00'),
      },
      {
        id: 4,
        userId: 3,
        adType: 'Text',
        promptContent: 'Watch Movies',
        responseContent: 'Best movie streaming service!',
        generatedOn: new Date('2024-05-17T12:00:00'),
      }
    ];

    this.originalAdsHistory = [...this.adsHistory];
    this.applyFilters();
  }

  applyFilters() {
    let filtered = [...this.originalAdsHistory];

    if (this.selectedDate) {
      const selected = new Date(this.selectedDate).toDateString();
      filtered = filtered.filter(ad =>
        new Date(ad.generatedOn).toDateString() === selected
      );
    }

    if (this.searchQuery.trim() !== '') {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(ad =>
        ad.promptContent.toLowerCase().includes(query)
      );
    }

    if (this.sortOption === 'newest') {
      filtered.sort((a, b) => b.generatedOn - a.generatedOn);
    } else if (this.sortOption === 'oldest') {
      filtered.sort((a, b) => a.generatedOn - b.generatedOn);
    } else if (this.sortOption === 'type') {
      filtered.sort((a, b) => a.adType.localeCompare(b.adType));
    }

    this.adsHistory = filtered;
  }

  onDateChange(event: Event) {
    this.selectedDate = (event.target as HTMLInputElement).value;
    this.applyFilters();
  }

  onSearchChange() {
    this.applyFilters();
  }

  onSortChange() {
    this.applyFilters();
  }

  // Action button methods
  saveAd(ad: any) {
    console.log('Saved ad:', ad);
  }

  editAd(ad: any) {
    console.log('Edit ad:', ad);
  }

  shareAd(ad: any) {
    console.log('Shared ad:', ad);
  }

  startOver(ad: any) {
    console.log('Started over with ad:', ad);
  }

  copyAd(ad: any) {
    console.log('Copied ad:', ad);
  }
}
