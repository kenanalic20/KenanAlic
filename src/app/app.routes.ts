import { Routes } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {
        path: 'post',
        component: PostComponent,
    },
    {
        path: 'post-details/:id',
        component: PostDetailsComponent,
    },
    {path: '**', component: NotFoundComponent},
];
