import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBase } from '../question-base';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {
questions$ :Observable<QuestionBase<any>[]>;
  constructor(private qcs:QuestionService) { 
    this.questions$ = qcs.getQuestions();
  }

  ngOnInit(): void {
  }

}
