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
  service: ArticleService;

  constructor(service: ArticleService) {
    this.service = service;
    this.articles = this.service.getArticles() ;
  }

  addArticle(title:HTMLInputElement, link:HTMLInputElement): boolean {
    console.log(`Adding content... title : ${title.value} and link : ${link.value}`);
    const freshArticle = new Article(title.value,link.value,0,'user');
    this.articles.push(freshArticle);
    
    //Reset the UI
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    const voteOrder = (a: Article,b: Article) => b.votes - a.votes;
    return this.articles.sort(voteOrder);
  }
}
