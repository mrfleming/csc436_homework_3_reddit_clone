import { Component, OnInit, HostBinding, Input } from '@angular/core';
import {Article} from './article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor(private service: ArticleService) {}

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

  flagArticle(a: Article): boolean {
    console.log(`Flagging ${a.title}`);
    this.service.setToMinimumVote(a);
    return false;
  }

  hyperVoteDown(): boolean {
    this.article.hyperVoteDown();
    return false;
  }

  isAdmin(): boolean {
    return this.article.isAdmin();
  }

  ngOnInit(){}
}
