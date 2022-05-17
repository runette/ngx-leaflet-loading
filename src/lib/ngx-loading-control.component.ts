/// <reference types='leaflet-loading' />
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {Map, Control} from 'leaflet';
import '../../../../node_modules/leaflet-loading/src/Control.Loading.js'

@Component({
  selector: 'leaflet-loading-control',
  template: '',
})
export class NgxLoadingControlComponent implements OnInit, OnDestroy {

  private _map?: Map;
  private loading: Control.Loading = new Control();

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this._map?.removeControl(this.loading);
  }

  @Input() options: {[name:string]:any} = {};

  @Input() set map(map: Map | undefined){
    if (map) {
      this._map = map;
      this.loading = new Control.Loading(this.options);
      this.loading.addTo(map);
    }
  }
  get map(): Map | undefined {
    return this._map
  }
}
