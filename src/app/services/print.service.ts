import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PrintService {
  isPrinting = false;

  constructor( 
    public router: Router) { 
   
  }

  printDocument(documentName: string, documentData: any[]) {
    this.isPrinting = true;
    return this.router.navigate(['/',
      { outlets: {
        'print': ['print', documentName, documentData.join()]
      }}]).then(
        () => true
      );
  }

  onDataReady() {
    setTimeout(() => {
      this.isPrinting = false;
        window.print();
        this.router.navigate([{ outlets: { print: null }}]);
    });
  }
}
