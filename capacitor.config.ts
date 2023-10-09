import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ionic-app-base',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    Geolocation: {
      // Add any geolocation plugin configuration here if needed
    }
  }
};

export default config;
