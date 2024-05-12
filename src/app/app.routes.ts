import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RecentesComponent } from './recentes/recentes.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', component: MainComponent}, 
    {path: 'recentes', component: RecentesComponent}
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouting{};