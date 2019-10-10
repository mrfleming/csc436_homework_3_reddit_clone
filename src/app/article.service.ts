import { Injectable, OnInit } from '@angular/core';
import { Article } from './article/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  theArticles: Article[] = [];
  constructor() {
    const myArticles = [
      new Article('Ben Simons hits a 3!!', 'https://espn.com/nba', 100, 'user'),
      new Article('Lakers destroy Warriors', 'https://espn.com/nba', 20, 'admin'),
      new Article('Zion first game', 'https://espn.com/nba', 4, 'user'),
      new Article('Angular 8', 'https://angular.io', 8, 'user')
    ];

    for (let i = 0; i < myArticles.length; i++) {
      this.theArticles.push(myArticles[i]);
    }
  }

  getArticles(): Article[] {
    return this.theArticles;
  }

  getLowestVote():number {
    let voteList = this.theArticles.map((a) => a.votes);
    voteList.sort((a,b) => a-b);

    return voteList[0];
  }

  ngOnInit(){
    
  }
}
