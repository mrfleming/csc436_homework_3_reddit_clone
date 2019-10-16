import { Component } from '@angular/core';
import { Article } from './article/article.model';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'reddit-app';
  articles: Article[];

  constructor(private service: ArticleService) {
    this.articles = [
      new Article('Ben Simons hits a 3!!', 'https://espn.com/nba', 100, 'user'),
      new Article('Lakers destroy Warriors', 'https://espn.com/nba', 20, 'admin'),
      new Article('Zion first game', 'https://espn.com/nba', 4, 'user'),
      new Article('Angular 8', 'https://angular.io', 8, 'user')
    ];
    this.service.articles = this.articles;
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding content... title : ${title.value} and link : ${link.value}`);
    const freshArticle = new Article(title.value, link.value, 0, 'user');
    this.articles.push(freshArticle);

    // Reset the UI
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    const voteOrder = (a: Article, b: Article) => b.votes - a.votes;
    return this.articles.sort(voteOrder);
  }
}
