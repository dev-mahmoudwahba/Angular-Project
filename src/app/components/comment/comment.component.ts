import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CommentsService } from '../../Services/comments.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private commentserv: CommentsService
  ) {}
  commentId: any;
  commentData: any;
  errorMessage: any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.commentId = param.get('id');
    });
    this.commentserv.getcomment(this.commentId).subscribe(
      (data) => {
        this.commentData = data;
        console.log(this.commentData);
        
      },
      (errorData) => {
        this.errorMessage = errorData;
      }
    );
  }

  goBackToPosts() {
    this.router.navigate(['/posts', { id: this.commentId }]);
  }
}
