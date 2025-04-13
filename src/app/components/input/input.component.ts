import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() placeholder: string = "";
  @Input() type: string = "text";
  @Input() value: string = "";
  @Input() styleType: string = "normal";
  // @Output() valueChange = new EventEmitter<string>();
  //  (input)="valueChange.emit($event.target.value)"
  get inputStyle(): string {
    switch (this.styleType) {
      case "login":
        return "border border-[#B1BBC2] mb-5 rounded-md py-3 ps-3 w-full max-w-[25rem]";
      default:
        return "";
    }
  }
}
