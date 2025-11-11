import { Component } from '@angular/core';
import { IonicModule, NavController, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TicketService } from '../../services/ticket.service';


@Component({
selector: 'app-ticket-create',
standalone: true,
imports: [IonicModule, CommonModule, FormsModule],
templateUrl: './ticket-create.component.html',
styleUrls: ['./ticket-create.component.scss']
})
export class TicketCreateComponent {
model = { title: '', namePerson: '', description: '' };
saving = false;


constructor(private ticketSvc: TicketService, private nav: NavController, private toastCtrl: ToastController) {}


async submit() {
if (!this.model.title || !this.model.namePerson || !this.model.description) {
const t = await this.toastCtrl.create({ message: 'Título y descripción son obligatorios', duration: 2000 });
await t.present();
return;
}


this.saving = true;
this.ticketSvc.create(this.model).subscribe({
next: async () => {
this.saving = false;
const t = await this.toastCtrl.create({ message: 'Ticket creado', duration: 1500 });
await t.present();
this.nav.back();
},
error: async (err) => {
console.error(err);
this.saving = false;
const tt = await this.toastCtrl.create({ message: 'Error creando ticket', duration: 2000 });
await tt.present();
}
});
}
}
