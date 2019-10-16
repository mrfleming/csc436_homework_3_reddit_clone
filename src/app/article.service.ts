import { Injectable } from '@angular/core';
import { Article } from './article/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articles: Article[];
  
  constructor() {}


  setToMinimumVote(a: Article) {
    let min = 0;
    const voteList = this.articles.map((item) => item.votes);
    console.table(voteList);

    voteList.sort((x, y) => x - y);
    min = voteList[0];

    if (a.votes > min) {
      a.votes = min - 1;
    }
  }
}
