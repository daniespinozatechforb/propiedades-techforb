import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AuthGuard } from './core/services/guards/auth.guard';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { 
        path: 'dashboard', 
        component: DashboardComponent,
        canActivate: [AuthGuard] // Protege esta ruta con el guard
      }
];
