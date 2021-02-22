import { QuestionBase } from "./question-base";

/**
 * The DropdownQuestion control presents a list of choices in a select box.
 * Reference https://angular.io/guide/dynamic-form
 */
export class DropdownQuestion extends QuestionBase<string> {
    controlType='dropdown'
}
