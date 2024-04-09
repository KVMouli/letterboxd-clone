import { Routes } from '@angular/router';
import { EntryComponent } from './pages/entry/entry.component';
export const routes: Routes = [
    {path:"home" ,component:EntryComponent},
    {path:'',redirectTo:"/home", pathMatch:'full'}
   
  
   
];
