import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  constructor() { }

  public projects: Project[];
  public project: Project;
  public chosenDiscussionIndex: number;
  public chosenProject: Project;
  public menuTypes = {
    PROJECT: 'project',
    DISCUSSION: 'discussion'
  };

  public menuType = this.menuTypes.PROJECT;

   ngOnInit() {
    this.projects = [
      {
        title: 'Butler',
        participants: ['שיראל קדוש', 'מיכאל טוגנדהפט', 'מעיין אלפסי'],
        startDate: new Date('March 1, 2019 09:00:00'),
        endDate: new Date(),
        discussions: [
          {
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
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: true},
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: true},
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: false}
            ],
            continueTasks: [
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: false},
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: false}
            ],
            comments: [
              {author: 'שיראל קדוש', content: 'תגובה תגובה תגובה'},
              {author: 'שיראל קדוש', content: 'תגובה תגובה תגובה'}
            ],
            previousDiscussionId: ''
          },
          {
            title: 'הדיון הכי הכי הכי 1',
            date: new Date(),
            purpose: 'לא לכל דיון יש מטרה אמיתית, בזבוז זמן מוחלט',
            host: 'מיטב שרוני',
            participants: ['מנחם ציקוואשווילי', 'לירון טאוב'],
            tags: ['חיל המודיעין', 'גזרת צפון'],
            background: 'בלחסלדחדלגחכדלגחכ דלחגכילד גחכידלג חכיד לגחכידלגח כידלגחכידלגכ שדג',
            mainPoints: 'שדגשדגש דגשדג שדג שדג שדג שדגשד גשדגשדגשדגשגד שדגש',
            mainPointsSum: 'שגלשךדגלשדג שדג שדצג שלדצג שלצד גלשצד גלשצד גלשדצ גלשדצ גשדגח',
            priorTasks: [
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: true},
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: true},
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: false}
            ],
            continueTasks: [
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: false},
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: false}
            ],
            comments: [
              {author: 'שיראל קדוש', content: 'תגובה תגובה תגובה'},
              {author: 'שיראל קדוש', content: 'תגובה תגובה תגובה'}
            ],
            previousDiscussionId: 'הדיון הכי הכי הכי'
          },
          {
            title: 'הדיון הכי הכי הכי 2',
            date: new Date(),
            purpose: 'לא לכל דיון יש מטרה אמיתית, בזבוז זמן מוחלט',
            host: 'מיטב שרוני',
            participants: ['מנחם ציקוואשווילי', 'לירון טאוב'],
            tags: ['חיל המודיעין', 'גזרת צפון'],
            background: 'בלחסלדחדלגחכדלגחכ דלחגכילד גחכידלג חכיד לגחכידלגח כידלגחכידלגכ שדג',
            mainPoints: 'שדגשדגש דגשדג שדג שדג שדג שדגשד גשדגשדגשדגשגד שדגש',
            mainPointsSum: 'שגלשךדגלשדג שדג שדצג שלדצג שלצד גלשצד גלשצד גלשדצ גלשדצ גשדגח',
            priorTasks: [
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: true},
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: true},
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: false}
            ],
            continueTasks: [
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: false},
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: false}
            ],
            comments: [
              {author: 'שיראל קדוש', content: 'תגובה תגובה תגובה'},
              {author: 'שיראל קדוש', content: 'תגובה תגובה תגובה'}
            ],
            previousDiscussionId: 'הדיון הכי הכי הכי 1'
          }
        ]
      },
      {
        title: 'DragonFly',
        participants: ['רינת ברנס', 'חיים כהן'],
        startDate: new Date('March 1, 2019 09:00:00'),
        endDate: new Date(),
        discussions: [
          {
            title: 'הדיון הכי הכי הכי 2',
            date: new Date(),
            purpose: 'לא לכל דיון יש מטרה אמיתית, בזבוז זמן מוחלט',
            host: 'מיטב שרוני',
            participants: ['מנחם ציקוואשווילי', 'לירון טאוב'],
            tags: ['חיל המודיעין', 'גזרת צפון'],
            background: 'בלחסלדחדלגחכדלגחכ דלחגכילד גחכידלג חכיד לגחכידלגח כידלגחכידלגכ שדג',
            mainPoints: 'שדגשדגש דגשדג שדג שדג שדג שדגשד גשדגשדגשדגשגד שדגש',
            mainPointsSum: 'שגלשךדגלשדג שדג שדצג שלדצג שלצד גלשצד גלשצד גלשדצ גלשדצ גשדגח',
            priorTasks: [
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: true},
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: true},
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: false}
            ],
            continueTasks: [
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: false},
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: false}
            ],
            comments: [
              {author: 'שיראל קדוש', content: 'תגובה תגובה תגובה'},
              {author: 'שיראל קדוש', content: 'תגובה תגובה תגובה'}
            ],
            previousDiscussionId: ''
          },
          {
            title: 'הדיון הכי הכי הכי 3',
            date: new Date(),
            purpose: 'לא לכל דיון יש מטרה אמיתית, בזבוז זמן מוחלט',
            host: 'מיטב שרוני',
            participants: ['מנחם ציקוואשווילי', 'לירון טאוב'],
            tags: ['חיל המודיעין', 'גזרת צפון'],
            background: 'בלחסלדחדלגחכדלגחכ דלחגכילד גחכידלג חכיד לגחכידלגח כידלגחכידלגכ שדג',
            mainPoints: 'שדגשדגש דגשדג שדג שדג שדג שדגשד גשדגשדגשדגשגד שדגש',
            mainPointsSum: 'שגלשךדגלשדג שדג שדצג שלדצג שלצד גלשצד גלשצד גלשדצ גלשדצ גשדגח',
            priorTasks: [
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: true},
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: true},
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: false}
            ],
            continueTasks: [
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: false},
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: false}
            ],
            comments: [
              {author: 'שיראל קדוש', content: 'תגובה תגובה תגובה'},
              {author: 'שיראל קדוש', content: 'תגובה תגובה תגובה'}
            ],
            previousDiscussionId: 'הדיון הכי הכי הכי 2'
          },
          {
            title: 'הדיון הכי הכי הכי 4',
            date: new Date(),
            purpose: 'לא לכל דיון יש מטרה אמיתית, בזבוז זמן מוחלט',
            host: 'מיטב שרוני',
            participants: ['מנחם ציקוואשווילי', 'לירון טאוב'],
            tags: ['חיל המודיעין', 'גזרת צפון'],
            background: 'בלחסלדחדלגחכדלגחכ דלחגכילד גחכידלג חכיד לגחכידלגח כידלגחכידלגכ שדג',
            mainPoints: 'שדגשדגש דגשדג שדג שדג שדג שדגשד גשדגשדגשדגשגד שדגש',
            mainPointsSum: 'שגלשךדגלשדג שדג שדצג שלדצג שלצד גלשצד גלשצד גלשדצ גלשדצ גשדגח',
            priorTasks: [
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: true},
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: true},
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: false}
            ],
            continueTasks: [
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: false},
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: false}
            ],
            comments: [
              {author: 'שיראל קדוש', content: 'תגובה תגובה תגובה'},
              {author: 'שיראל קדוש', content: 'תגובה תגובה תגובה'}
            ],
            previousDiscussionId: 'הדיון הכי הכי הכי 3'
          }
        ]
      },
      {
        title: 'מילבת',
        participants: ['משה קדוש', 'מיכאל ישראלי', 'אריאל לופר'],
        startDate: new Date('March 1, 2019 09:00:00'),
        endDate: new Date(),
        discussions: [
          {
            title: 'הדיון הכי הכי הכי 5',
            date: new Date(),
            purpose: 'לא לכל דיון יש מטרה אמיתית, בזבוז זמן מוחלט',
            host: 'מיטב שרוני',
            participants: ['מנחם ציקוואשווילי', 'לירון טאוב'],
            tags: ['חיל המודיעין', 'גזרת צפון'],
            background: 'בלחסלדחדלגחכדלגחכ דלחגכילד גחכידלג חכיד לגחכידלגח כידלגחכידלגכ שדג',
            mainPoints: 'שדגשדגש דגשדג שדג שדג שדג שדגשד גשדגשדגשדגשגד שדגש',
            mainPointsSum: 'שגלשךדגלשדג שדג שדצג שלדצג שלצד גלשצד גלשצד גלשדצ גלשדצ גשדגח',
            priorTasks: [
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: true},
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: true},
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: false}
            ],
            continueTasks: [
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: false},
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: false}
            ],
            comments: [
              { author: 'שיראל קדוש', content: 'תגובה תגובה תגובה'},
              { author: 'שיראל קדוש', content: 'תגובה תגובה תגובה'}
            ],
            previousDiscussionId: ''
          },
          {
            title: 'הדיון הכי הכי הכי 6',
            date: new Date(),
            purpose: 'לא לכל דיון יש מטרה אמיתית, בזבוז זמן מוחלט',
            host: 'מיטב שרוני',
            participants: ['מנחם ציקוואשווילי', 'לירון טאוב'],
            tags: ['חיל המודיעין', 'גזרת צפון'],
            background: 'בלחסלדחדלגחכדלגחכ דלחגכילד גחכידלג חכיד לגחכידלגח כידלגחכידלגכ שדג',
            mainPoints: 'שדגשדגש דגשדג שדג שדג שדג שדגשד גשדגשדגשדגשגד שדגש',
            mainPointsSum: 'שגלשךדגלשדג שדג שדצג שלדצג שלצד גלשצד גלשצד גלשדצ גלשדצ גשדגח',
            priorTasks: [
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: true},
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: true},
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: false}
            ],
            continueTasks: [
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: false},
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: false}
            ],
            comments: [
              {author: 'שיראל קדוש', content: 'תגובה תגובה תגובה'},
              {author: 'שיראל קדוש', content: 'תגובה תגובה תגובה'}
            ],
            previousDiscussionId: 'הדיון הכי הכי הכי 5'
          },
          {
            title: 'הדיון הכי הכי הכי 7',
            date: new Date(),
            purpose: 'לא לכל דיון יש מטרה אמיתית, בזבוז זמן מוחלט',
            host: 'מיטב שרוני',
            participants: ['מנחם ציקוואשווילי', 'לירון טאוב'],
            tags: ['חיל המודיעין', 'גזרת צפון'],
            background: 'בלחסלדחדלגחכדלגחכ דלחגכילד גחכידלג חכיד לגחכידלגח כידלגחכידלגכ שדג',
            mainPoints: 'שדגשדגש דגשדג שדג שדג שדג שדגשד גשדגשדגשדגשגד שדגש',
            mainPointsSum: 'שגלשךדגלשדג שדג שדצג שלדצג שלצד גלשצד גלשצד גלשדצ גלשדצ גשדגח',
            priorTasks: [
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: true},
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: true},
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: false}
            ],
            continueTasks: [
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: false},
              {summary: 'משימה 1', startDate: new Date(), endDate: new Date(), responsible: 'שיראל קדוש', jiraLink: 'url', finished: false}
            ],
            comments: [
              { author: 'שיראל קדוש', content: 'תגובה תגובה תגובה'},
              { author: 'שיראל קדוש', content: 'תגובה תגובה תגובה'}
            ],
            previousDiscussionId: 'הדיון הכי הכי הכי 6'
          }
        ]
      }
    ];
  }

  updateMenuType(input) {
    this.menuType = input.menuType;
    if (this.menuType === this.menuTypes.DISCUSSION) {
      this.project = this.projects[input.projectIndex];
    }
  }

  updateProject(input) {
    const index = this.projects.indexOf(input.project);

    if (index >= 0) {
      this.projects[index].discussions = input.project.discussions;
    }
  }
}
