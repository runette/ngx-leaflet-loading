# NGX-Leaflet-Loading

This is a wrapper for the [leaflet.loading control](https://github.com/ebrelsford/Leaflet.loading) to make it easy to use in Angular 8+.

This wrapper is tested against the [@asymmetrik/ngx-leaflet](https://github.com/Asymmetrik/ngx-leaflet) library but it has no dependency on that library so *should* work without it. It does, obviously, have a dependency that leaflet is loaded.

For more detailed descriptions of how this wrapper was created : [Documentation](https://runette.gitbook.io/alcm/).

For detailed descriptions of how to use and worked examples : [Article](https://medium.com/runic-software/quick-guide-to-leaflet-controls-in-angular-io-1b35d0807bdb), [Article](https://medium.com/runic-software/advanced-interactive-maps-in-angular-with-leaflet-68baafa03f72)

For an example of this working in a real site - see [trackbash](https://trackbash.co.uk).

# Install

Install using npm:

```
npm install @runette/ngx-leaflet-loading
```

Note that from version 1.0.4, this library is built using a partial Ivy compilation and should work with any version of Angular.io after version 12.0.0
# Usage

This library needs to be imported into the application module:

```
import {NgxLoadingControlModule} from '@runette/ngx-leaflet-loading'

imports: [
    ...
    NgxLoadingControlModule,
  ],
```

Then, the control is inserted using the following directive:

```
<leaflet-loading-control
    [map]='...'
    [options]="..."
></leaflet-loading-control>
```

Where `map` is an instance of a leaflet map and `options` is an object with valid options for the control.

# Usage with NGX-Leaflet

This library integrates very easily with ngx-leaflet using the onMapReady event:

```
<div id='map' class="map-container" leaflet
     [leafletOptions]="options"
     (leafletMapReady)="onMapReady($event)"
     ></div>
<leaflet-loading-control
    [map]='map'
    [options]="loadingOptions"
></leaflet-loading-control>
```
by adding the following to your map component:

```
...
import { Map } from 'leaflet';


export class OsmMapComponent implements OnInit, OnDestroy {
  public map?: Map;
  public loadingOptions={
    position: 'topleft',
  }
  
  ...
  
  onMapReady(map: Map) {
    this.map = map;
  }
```

# Usage - CSS

Unfortunately - I think because the leaflet map is run outside of Angular by ngx-leaflet - the normal css encapsulation does not work and you have to load the css globally.

Add the following to the styles.css 

```CSS
@import "leaflet-loading/src/Control.Loading.css";
```

# Build Config

For some reason yet to be found - this library does not like being built with `"buildOptimizer": true,` in the build environment - which is usually the default for the production environment in `angular.json`.

Always build with `"buildOptimizer": false,`.

# API Access to the Control

If you want access the control's methods directly from your typescript code - this can be done with `@ViewChild`

Use `ViewChild` to access the component, for instance 

```ts
@ViewChild(NgxLoadingControlComponent,{static: false}) loadingComponent: NgxLoadingControlComponent;
```

The actual instance of the control can then be accessed directly as `this.loadingComponent.loading`

For more details and worked examples, see : [Article](https://medium.com/runic-software/advanced-interactive-maps-in-angular-with-leaflet-68baafa03f72)

# Contributions

Contributions to this repository are very welcome.

Please fork the repository and create a new branch for your changes. The branch can be built locally using 

```
ng build ngx-leaflet-loading
```

in the root folder of the repo. This creates an npm package in a folder called `dist`. This can loaded in a test app using `npm install` and the FQ path to the dist folder.

When your changes are complete create a Pull Requet against the master. It is IMPORTANT that you change the version number in `package.json` AND the tag number in `.github/workflowds/build.yaml` to the next version before the PR.

When I have accepted and merged the PR, Github actions will automatically build the new package release and loaded it both as a GH release using the version as the tag name and publish the new version on npm.
