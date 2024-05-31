import { Component, Input } from '@angular/core'

@Component({
  selector: 'you-tube',
  templateUrl: 'you-tube.component.html',
  styleUrls: ['you-tube.component.css'],
})
export class YouTube {
  @Input()
  pastedImageSrc: string = '/assets/logos/pastedimage-smjb.svg'
  @Input()
  pastedImageAlt: string = 'pastedImage'
  constructor() {}
}
