import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Pipe({
  name: 'highlightcolor'
})
export class HighlightcolorPipe implements PipeTransform {

  constructor(private sanitizer : DomSanitizer){

  }

  transform(value: string, city: string): any {
    return  this.sanitizer.bypassSecurityTrustHtml(`<div style='background-color:yellow'>${city}</div>`);     
  }

}
