import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';
import { faArrowRightToBracket, faAngleRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterModule, CommonModule, FontAwesomeModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() styleType: string = "green";
  @Input() label: string = "";
  @Input() url: string = "";
  @Input() type: string = "";
  classProp: string = "";
  icon: IconDefinition = faArrowRightToBracket;
  iconClass: string = "";
  isIcon: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.inputStyle();
  }


  inputStyle(): void {
    switch (this.styleType) {
      case "login":
        this.classProp = "block bg-[#FF4307] border border-[#FF4307] w-full py-3 rounded-xl text-white hover:text-[#FF4307] hover:bg-white transition-all delay-150 duration-300  text-center";
        break;
      case "log-out":
        this.isIcon = true;
        this.iconClass = "me-5 text-xl";
        this.icon = faArrowRightToBracket;
        this.classProp = "bg-[#f4511e] rounded-md border-[#f4511e] text-white px-8 py-2 flex flex-row items-center justify-center";
        break;
      case "log-out-mobile":
        this.isIcon = true;
        this.iconClass = "me-5 text-xl";
        this.icon = faArrowRightToBracket;
        this.classProp = "bg-[#f4511e] rounded-md border-[#f4511e] max-w-40 text-white px-8 py-2 flex flex-row items-center justify-center";
        break;
      case "nav":
        this.isIcon = true;
        this.icon = faAngleRight;
        this.classProp = "flex items-center justify-between bg-[#ECF3F8] hover:bg-[#FF4307] hover:text-white rounded-md px-5 py-3 w-full block transition-all delay-150 duration-300 mb-5 flex-row-reverse";
        break;
      case "submit":
        this.classProp = "bg-green-500 border border-green-500 block w-full py-3 rounded-xl text-white hover:text-green-500 hover:bg-white transition-all delay-150 duration-300 text-center";
        break;
      case "404":
        this.isIcon = false;
        this.classProp = "block max-w-45 bg-[#FF4307] border border-[#FF4307] w-full py-3 rounded-xl text-white hover:text-[#FF4307] hover:bg-white transition-all delay-150 duration-300 text-center";
        break;

    }
  }

  goToPage(): void {
    if (this.url) {
      this.router.navigate([this.url]);
    }
  }
}
