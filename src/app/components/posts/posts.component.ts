import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../Services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private postserv:PostsService) { }
  postsData:any;
  errorMessage:any;
  ngOnInit(): void {
  this.postserv.getPosts().subscribe(
    data =>{
      this.postsData = data
    },
    errorData=>{
      this.errorMessage = errorData
    }
  ) 
  }

}
