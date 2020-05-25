import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { MainPage } from '../pages/main/main';
import { RiderPage } from '../pages/rider/rider';
import { HistoryPage } from '../pages/history/history';
import { RemitPage } from '../pages/remit/remit';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{ title: string, component: any, icon: string }>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Business Profile', component: MainPage, icon: "contact" },
      { title: 'Manage Riders', component: RiderPage, icon: "card" },
      { title: 'History', component: HistoryPage, icon: "star" },
      { title: 'Remit', component: RemitPage, icon: "subway" },
      { title: 'Contact Us', component: MainPage, icon: "text" },
      { title: 'About', component: MainPage, icon: "people" }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if (this.platform.is('android')) {
        this.statusBar.styleBlackOpaque();
      }
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
