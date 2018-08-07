import { Directive, ElementRef } from "@angular/core";


@Directive({
    selector:'[heading-highlighter]'
})
export class HeadingHighlighter{
    constructor(ef: ElementRef){
       ef.nativeElement.style.background = 'rgba(79, 83, 86, 0.59)'; 
    }
}