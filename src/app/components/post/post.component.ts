import { Component, inject } from '@angular/core';
import { PostService } from '../../services/post-service.service';
import { Observable } from 'rxjs';
import { Post } from '../../models/post';
import { NgForOf } from "@angular/common";
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  postService=inject(PostService);
  router = inject(Router)
  posts:Post[]=[];
  search:string=''
  ngOnInit() {
    this.postService.getPosts().subscribe((res:any)=>{
      this.posts = res.posts
      console.log(this.posts)
    })
  }
  openDetails(id:number) {
    this.router.navigate([`/post-details/${id}`]);
  }
  onSearch() {
    this.postService.searchPost(this.search).subscribe((res:any)=>{
      this.posts = res.posts
    })
  }
}
