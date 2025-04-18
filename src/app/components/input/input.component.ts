import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';


@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() placeholder: string = "";
  @Input() type: string = "text";
  @Input() value: string = "";
  @Input() styleType: string = "normal";
  @Output() valueChange = new EventEmitter<string>();

  get inputStyle(): string {
    switch (this.styleType) {
      case "login":
        return "border border-[#B1BBC2] mb-5 rounded-md py-3 ps-3 w-full max-w-[25rem]";
        break;
      case "normal":
        return "border border-[#B1BBC2] mb-1 rounded-md py-3 ps-3 w-full";
        break;
      default:
        return "";
    }
  }

  onChange: any = () => { };
  onTouched: any = () => { };

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInputChange(event: any) {
    const newValue = event.target.value;
    this.value = newValue;
    this.onChange(newValue);
    this.onTouched();
  }
}
