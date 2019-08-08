import { Component, Input } from '@angular/core';
import { Assignment } from './const';

@Component({
    selector: 'app-header',
    template: `<h4 class = "header">{{Assignment}}  /  {{Name}}</h4>`,
})

export class HeaderComponent {
    @Input() Name: string;
    @Input() Assignment: string;
}
