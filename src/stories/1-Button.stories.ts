import { Router, RouterModule } from '@angular/router';
import { NgxMinisidebarComponent } from 'ngx-minisidebar';
  
import { storiesOf } from "@storybook/angular";
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

// export default {
//   title: 'MiniSidebar',
//   component: NgxMinisidebarComponent,
  
// };


storiesOf("ngx-minisidebar", module).add("basic", () => ({
  moduleMetadata: {
    imports: [RouterModule.forRoot([
      { path: '', component: NgxMinisidebarComponent }
    ])],
    schemas: [NO_ERRORS_SCHEMA],
    declarations: [],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
  },
  component: NgxMinisidebarComponent,

  props: {
    links: [
      { path: '/', text: 'Home', icon: '🏠' },
      { path: 'calendar', text: 'History', icon: '📅' },
      { path: 'actions', text: 'Actions', icon: '🚜' },
      { path: 'settings', text: 'Settings', icon: '⚙️' },
    ],
    title: 'ngx-miniSideBar',
  }
}));



// export const Emoji = () => ({
//   component: Button,
//   props: {
//     text: '😀 😎 👍 💯',
//   },
// });

// Emoji.story = {
//   parameters: { notes: 'My notes on a button with emojis' },
// };

// export const WithSomeEmojiAndAction = () => ({
//   component: Button,
//   props: {
//     text: '😀 😎 👍 💯',
//     onClick: action('This was clicked OMG'),
//   },
// });

// WithSomeEmojiAndAction.story = {
//   name: 'with some emoji and action',
//   parameters: { notes: 'My notes on a button with emojis' },
// };

// export const ButtonWithLinkToAnotherStory = () => ({
//   component: Button,
//   props: {
//     text: 'Go to Welcome Story',
//     onClick: linkTo('Welcome'),
//   },
// });

// ButtonWithLinkToAnotherStory.story = {
//   name: 'button with link to another story',
// };
