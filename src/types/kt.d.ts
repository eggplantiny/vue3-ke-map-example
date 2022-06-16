declare namespace olleh.maps {
  export class Map {
    constructor(container: HTMLElement, options: MapOptions)

    public setZoom(zoomLevel: number)
  }

  export class UTMK {
    constructor(n1: number, n2: number)
  }

  export class LatLng {
    constructor(lat: number, lng: number)
  }

  export interface MapOptions {
    center: LatLng | UTMK
    zoom: number
    mapTypeId: string
  }
}

declare namespace olleh.maps.overlay {
  export interface MarkerConfig {
    position: LatLng | UTMK
    title?: string
    animation?: any
    draggable?: boolean
  }

  export class Marker {
    constructor(markerConfig: MarkerConfig)

    public setMap(map: Map)
    public onEvent(ev: string, callback: (params: any) => void)

    public static get BOUNCE()
    public static get DROP()
  }
}
