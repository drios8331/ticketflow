import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { TicketService, Ticket } from '../../services/ticket.service';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent {
  tickets: Ticket[] = [];
  isLoading = false;

  constructor(private ticketSvc: TicketService, private router: Router) {}

  // 👇 este hook se ejecuta cada vez que se entra a la vista
  ionViewWillEnter() {
    this.load();
  }

  load() {
    this.isLoading = true;
    this.ticketSvc.list().subscribe({
      next: (data) => {
        this.tickets = data.sort((a, b) => {
          const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
          const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
          return dateB - dateA;
        });
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error cargando tickets:', err);
        this.isLoading = false;
      },
    });
  }

  onCreate() {
    this.router.navigate(['/create']);
  }
}
