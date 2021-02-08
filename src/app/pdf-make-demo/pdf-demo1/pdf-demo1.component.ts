import { Component, OnInit } from '@angular/core';

import pdfMake from 'pdfmake/build/pdfmake.js';
import pdfFonts from 'pdfmake/build/vfs_fonts.js';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

///Learning References:
// https://dev.to/ankitprajapati/angular-export-to-pdf-using-pdfmake-client-side-pdf-generation-1jlk
//https://www.ngdevelop.tech/angular-8-export-to-pdf-using-pdfmake/
//https://www.c-sharpcorner.com/article/client-side-pdf-generation-in-angular-with-pdfmake/
@Component({
  selector: 'app-pdf-demo1',
  templateUrl: './pdf-demo1.component.html',
  styleUrls: ['./pdf-demo1.component.css']
})
export class PdfDemo1Component implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  generatePdf(){
    let docDefinition = {  
      header: 'C#Corner PDF Header',  
      content: 'Sample PDF generated with Angular and PDFMake for C#Corner Blog'  
    };  
    //pdfMake.createPdf(docDefinition).open();
    //pdfMake.createPdf(docDefinition).open({}, window);
    //pdfMake.createPdf(docDefinition).download();
    pdfMake.createPdf(docDefinition).print();
    
   }
}
