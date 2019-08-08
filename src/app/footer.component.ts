import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `<p class="footer"> {{Name}}  /  {{Student_Number}}  /  {{Login_Name}}  /  {{Campus}}</p>`,
})

export class FooterComponent {
    @Input() Name: string;
    @Input() Student_Number: string;
    @Input() Login_Name: string;
    @Input() Campus: string;
}