import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.imcc.powerdirect',
  appName: 'ionic-pushnotification-poc',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    pushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert'],
    },
  },
};

export default config;
