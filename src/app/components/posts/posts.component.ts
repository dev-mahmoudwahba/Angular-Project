import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../Services/posts.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  commentIdInPosts: any;

  constructor(
    private postserv: PostsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.commentIdInPosts = param.get('id');
    });
  }
  postsData: any;
  errorMessage: any;
  ngOnInit(): void {
    this.postserv.getPosts().subscribe(
      (data) => {
        this.postsData = data;
      },
      (errorData) => {
        this.errorMessage = errorData;
      }
    );
  }
  goToCommentNum(item: any) {
    this.router.navigate(['/comments', item.id]);
  }
  isSelected(item: any) {
    return Number(item.id) === Number(this.commentIdInPosts);
  }
}
