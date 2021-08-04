import { Component,  ElementRef,  OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import jsPDF from 'jspdf';

import pdfMake from 'pdfmake/build/pdfmake';

import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

// import htmlToPdfmake from 'html-to-pdfmake';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-question-demo',
  templateUrl: './question-demo.component.html',
  styleUrls: ['./question-demo.component.css']
})
export class QuestionDemoComponent implements OnInit {
  text: string;
  studentForm:FormGroup;
  @ViewChild('container') pdfTable: ElementRef;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.studentForm= this.fb.group({
      firstName:['', Validators.required],
      lastName:[''],
      addresses:this.fb.array([this.addAddress()])
    })
  }
  addAddress():FormGroup{
    let address = this.fb.group({
      area:['',Validators.required],
      city:['']
    })
    return address;
  }
  get addresses():FormArray{
    return this.studentForm.get('addresses') as FormArray;
  }
  addNewAddress():void{
    this.addresses.push(this.addAddress());
  }
  onSubmit():void{
    console.log(this.studentForm.value)
  }
  openPdf():void{
    let DATA = document.getElementById('container');
    
    html2canvas(DATA).then(canvas => {
        
        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;
        
        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
        
        PDF.save('angular-demo.pdf');
    });     
  }
  openPdf2():void{
    var doc  = new jsPDF();
    let lines:string[]=['First line', 'Second Line ', 'Third line'];
    doc.setFontSize(10);
    doc.text('First line',1,10);//   ( 1,10,'First Line with 1,10');
    doc.text('Second',1,20);
    doc.text('Third line',1,30);
    // doc.moveTo(1,80)
    doc.rect(1,1,200,20,'F');
    doc.text(lines,1,40);
    doc.save('abc.pdf');
  }
  print():void{
    window.print();
    
  }
}
