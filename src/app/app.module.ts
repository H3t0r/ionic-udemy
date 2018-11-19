import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { TodoPage } from '../pages/todo/todo.component';
import { DonePage } from '../pages/done/done.component';
import { NewListPage } from '../pages/new-list/new-list.component';
import { ListsComponent } from '../components/lists.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TasksService } from '../services/tasks.service';

import { FilterListsByPipe } from '../pipes/filter-lists-by/filter-lists-by';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    TodoPage,
    DonePage,
    NewListPage,
    FilterListsByPipe,
    ListsComponent,
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, TabsPage, TodoPage, DonePage, NewListPage],
  providers: [
    StatusBar,
    SplashScreen,
    TasksService,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ],
})
export class AppModule {}
