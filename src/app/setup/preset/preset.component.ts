import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tea-preset',
  templateUrl: './preset.component.html',
  styleUrls: ['./preset.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PresetComponent implements OnInit {

  @Input()
  preset: Preset;

  @Output()
  usePreset: EventEmitter<Preset> = new EventEmitter<Preset>();

  constructor() { }

  ngOnInit() {
  }

}