import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

declare var admob;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.initAdMob();
    });
  }

  initAdMob() {
    if( typeof admob != 'undefined') {
      admob.banner.config({
        id: 'ca-app-pub-1626183619973191/7348548207',
        overlap: true,
        isTesting: true
      });
      admob.banner.prepare();
      admob.banner.show();
    }
  }
}
