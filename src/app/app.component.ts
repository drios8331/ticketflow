import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
selector: 'app-root',
standalone: true,
imports: [IonicModule, RouterModule, CommonModule],
template: `
<ion-app>
      <ion-split-pane contentId="main-content">
        <!-- Sidebar -->
        <ion-menu contentId="main-content">
          <ion-header>
            <ion-toolbar color="white">
            </ion-toolbar>
          </ion-header>

          <ion-content>
            <ion-list>
              <ion-item routerLink="/" routerDirection="root">
                <ion-label>Dashboard</ion-label>
              </ion-item>
              <ion-item routerLink="/create" routerDirection="forward">
                <ion-label>Tickets</ion-label>
              </ion-item>
              <ion-item routerLink="/create" routerDirection="forward">
                <ion-label>En proceso</ion-label>
              </ion-item>
              <ion-item routerLink="/create" routerDirection="forward">
                <ion-label>Finalizados</ion-label>
              </ion-item>
            </ion-list>
          </ion-content>
        </ion-menu>

        <!-- Main content -->
        <div class="ion-page" id="main-content">
          <ion-header>
            <ion-toolbar color="primary">
              <ion-buttons slot="start">
                <ion-menu-button></ion-menu-button>
              </ion-buttons>
              <ion-title>TicketFlow</ion-title>
            </ion-toolbar>
          </ion-header>

          <ion-content>
            <ion-router-outlet></ion-router-outlet>
          </ion-content>
        </div>
      </ion-split-pane>
    </ion-app>
  `,
})
export class AppComponent {}
