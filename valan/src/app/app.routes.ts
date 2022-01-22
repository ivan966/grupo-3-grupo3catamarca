
import{ Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SesionComponent } from './components/sesion/sesion.component';


export const ROUTES: Routes= [

    { path:'home', component: HomeComponent },
    {path:'sesion', component: SesionComponent},
    {path:'', pathMatch: 'full', redirectTo:'home'},
    {path:'**', pathMatch: 'full', redirectTo:'home'},    
    
];

