import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ticketflow.app', // Cambia este ID por el de tu app (formato dominio inverso)
  appName: 'TicketFlow',
  webDir: 'www', // 👈 importante: debe apuntar a la carpeta generada por ionic build
  server: {
    androidScheme: 'https', // evita problemas con contenido mixto
    cleartext: true
  }
};

export default config;
