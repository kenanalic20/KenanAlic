import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url:string = 'https://dummyjson.com/posts/';
  commentsUrl:string = 'https://dummyjson.com/comments/add'
  http = inject(HttpClient)
  //https://dummyjson.com/comments/post/6
  getPosts() {
    return this.http.get(this.url);
  }

  getPostById(id:number) {
    return this.http.get(this.url+id)
  }

  getPostComments(id:number) {
    return this.http.get(this.url+id+'/comments')
  }

  searchPost(search : string) {
    return this.http.get(this.url+`/search?q=${search}`)
  }

  addComment(data:any) {
    return this.http.post(this.commentsUrl,data);
  }
}
