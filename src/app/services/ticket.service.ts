import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Ticket {
  _id?: string;
  title: string;
  description: string;
  createdAt?: string;
  status?: string;
}

@Injectable({ providedIn: 'root' })
export class TicketService {
  private api = 'https://ticketflow-api.onrender.com/tickets';

  constructor(private http: HttpClient) {}

  list(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.api);
  }

  create(payload: { title: string; description: string }): Observable<Ticket> {
    return this.http.post<Ticket>(this.api, payload);
  }

  update(id: string, payload: Partial<Ticket>): Observable<Ticket> {
    return this.http.put<Ticket>(`${this.api}/${id}`, payload);
  }
}
