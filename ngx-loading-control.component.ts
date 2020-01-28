/// <reference path="../../node_modules/@types/leaflet-loading/index.d.ts" />
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {Map, Control, LoadingOptions} from 'leaflet';
import '../../../../node_modules/leaflet-loading/src/Control.Loading.js'

@Component({
  selector: 'leaflet-loading-control',
  template: '',
})
export class NgxLoadingControlComponent implements OnInit, OnDestroy {

  private _map: Map;
  public loading: Control.Loading;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this._map.removeControl(this.loading);
  }

  @Input() options: LoadingOptions= {};

  @Input() set map(map: Map){
    if (map) {
      this._map = map;
      this.loading = new Control.Loading(this.options);
      this.loading.addTo(map);
    }
  }
  get map(): Map {
    return this._map
  }
}
