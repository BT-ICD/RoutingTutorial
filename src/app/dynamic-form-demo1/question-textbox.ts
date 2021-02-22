/**
 * The TextboxQuestion control type presents a question and allows users to enter input.
 * Reference: https://angular.io/guide/dynamic-form
 */
import { QuestionBase } from "./question-base";

export class TextboxQuestion extends QuestionBase<string> {
    controlType='textbox';
    
}
