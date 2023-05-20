import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatbotPage } from './chatbot.page';

const routes: Routes = [
  {
    path: '',
    component: ChatbotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatbotPageRoutingModule {}
