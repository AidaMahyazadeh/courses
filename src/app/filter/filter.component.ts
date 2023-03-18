import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
@Input() all=0;
@Input() free=0;
@Input() premium=0;
selectedRadioButtonValue = 'All';
@Output() filterRadioButtonSelectionChanged : EventEmitter<string> = new EventEmitter <string>();

onRadioButtonSelectionChanged(){
  this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);

}
}
