import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class = "container">
      <h1>{{title}}</h1>
      <ngs-template></ngs-template>
    </div>
  `,
})
export class AppComponent  {
  /* タイトル */
  title : String = "PR01 : Setting Template";
}
