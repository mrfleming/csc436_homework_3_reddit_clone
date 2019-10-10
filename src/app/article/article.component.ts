import { Component, OnInit, HostBinding, Input } from '@angular/core';
import {Article} from './article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;
  service: ArticleService;

  constructor(service: ArticleService) {
    this.service = service;
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  getVotes(): number {
    return this.article.getVotes();
  }

  flagArticle(): void{
    const theMinVote = this.service.getLowestVote();
    this.article.setVote(theMinVote-1);
  }

  hyperVoteDown(): boolean {
    this.article.hyperVoteDown();
    return false;
  }

  isAdmin(): boolean{
    return this.article.isAdmin();
  }
   
  ngOnInit() {}

}
