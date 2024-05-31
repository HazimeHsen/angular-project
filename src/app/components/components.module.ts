import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ActiveUsers } from './active-users/active-users.component'
import { YouTube } from './you-tube/you-tube.component'
import { Card } from './card/card.component'
import { Testimonal } from './testimonal/testimonal.component'
import { Schedule } from './schedule/schedule.component'

@NgModule({
  declarations: [ActiveUsers, YouTube, Card, Testimonal, Schedule],
  imports: [CommonModule, RouterModule],
  exports: [ActiveUsers, YouTube, Card, Testimonal, Schedule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
