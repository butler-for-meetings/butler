import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discussion-view',
  templateUrl: './discussion-view.component.html',
  styleUrls: ['./discussion-view.component.scss']
})
export class DiscussionViewComponent implements OnInit {

  discussion = {
    title: 'הדיון הכי הכי הכי',
    date: new Date(),
    purpose: 'לא לכל דיון יש מטרה אמיתית, בזבוז זמן מוחלט',
    host: 'מיטב שרוני',
    participants: ['מנחם ציקוואשווילי', 'לירון טאוב'],
    tags: ['חיל המודיעין', 'גזרת צפון'],
    background: 'בלחסלדחדלגחכדלגחכ דלחגכילד גחכידלג חכיד לגחכידלגח כידלגחכידלגכ שדג',
    mainPoints: 'שדגשדגש דגשדג שדג שדג שדג שדגשד גשדגשדגשדגשגד שדגש',
    mainPointsSum: 'שגלשךדגלשדג שדג שדצג שלדצג שלצד גלשצד גלשצד גלשדצ גלשדצ גשדגח',
    priorTasks: [
      {summary: 'משימה 1', endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: true},
      {summary: 'משימה 1', endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: true},
      {summary: 'משימה 1', endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: false}
    ],
    continueTasks: [
      {summary: 'משימה 1', endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: false},
      {summary: 'משימה 1', endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: false}
    ],
    comments: [
      {author: 'שיראל קדוש', content: 'תגובה תגובה תגובה'},
      {author: 'שיראל קדוש', content: 'תגובה תגובה תגובה'}
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
