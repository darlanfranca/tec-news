import { Component, OnChanges, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RecentesComponent } from '../recentes/recentes.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule, RecentesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  @Input() value: number = 0;
}
