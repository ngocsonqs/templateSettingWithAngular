import { Component } from "@angular/core";

@Component({
  moduleId : module.id,
  selector : "ngs-template",
  templateUrl : "./template.component.html"
})

export class TemplateComponent {

  // デフォルト文字列
  txtDefault : String = "";

  constructor() {
    this.txtDefault = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, debitis.";
  }
}
