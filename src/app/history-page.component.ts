const userId = sessionStorage.getItem("userId");  // Ensure userId is stored after login

this.http.get(`http://localhost:5000/api/AdHistory/${userId}`).subscribe((data: any) => {
   this.historyAds = data;
});
