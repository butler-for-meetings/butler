import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discussion-view',
  templateUrl: './discussion-view.component.html',
  styleUrls: ['./discussion-view.component.scss']
})
export class DiscussionViewComponent implements OnInit {

  discussion = {
    title: "הדיון הכי הכי הכי",
    datetime: new Date(),
    purpose: "לא לכל דיון יש מטרה אמיתית, בזבוז זמן מוחלט",
    administrator: "מיטב שרוני",
    attendants: ["מנחם ציקוואשווילי", "לירון טאוב"],
    tags: ["חיל המודיעין", "גזרת צפון"],
    background: " בלחסלדחדלגחכדלגחכ דלחגכילד גחכידלג חכיד לגחכידלגח כידלגחכידלגכ שדג",
    highlights: "שדגשדגש דגשדג שדג שדג שדג שדגשד גשדגשדגשדגשגד שדגש",
    administratorsSummary: "שגלשךדגלשדג שדג שדצג שלדצג שלצד גלשצד גלשצד גלשדצ גלשדצ גשדגח"
  }

  constructor() { }

  ngOnInit() {
  }

}
