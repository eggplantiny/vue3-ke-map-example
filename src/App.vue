<script setup lang="ts">
import { onMounted, ref } from 'vue'
import MapOptions = olleh.maps.MapOptions
import MarkerConfig = olleh.maps.overlay.MarkerConfig

const mapRef = ref<HTMLElement>()

const markers: MarkerConfig[] = [
  {
    position: new window.olleh.maps.LatLng(37.4714, 127.0294),
    title: 'KT R&D Center',
    animation: window.olleh.maps.overlay.Marker.BOUNCE,
    draggable: false,
  },
  {
    position: new window.olleh.maps.LatLng(37.4715, 127.0293),
    title: 'KT R&D Center2',
    animation: window.olleh.maps.overlay.Marker.DROP,
    draggable: false,
  },
  {
    position: new window.olleh.maps.LatLng(37.4713, 127.0296),
    title: 'KT R&D Center3',
    animation: window.olleh.maps.overlay.Marker.BOUNCE,
    draggable: false,
  },
]

function initializeMap() {
  const mapOptions: MapOptions = {
    center: new olleh.maps.UTMK(958386.063532902, 1941447.5761742294),
    zoom: 9,
    mapTypeId: 'ROADMAP',
  }
  console.log(olleh)

  const map = new olleh.maps.Map(mapRef.value!, mapOptions)

  map.setZoom(12)

  markers.forEach((config: MarkerConfig) => {
    const marker = new olleh.maps.overlay.Marker(config)
    marker.setMap(map)
    marker.onEvent('ready', (params) => {
      console.log('ready', marker, params)
    })
    marker.onEvent('click', (params) => {
      console.log('clicked', marker, params)
    })
  })
}

onMounted(() => {
  initializeMap()
})
</script>

<template>
  <main>
    <div class="kt-map" ref="mapRef" />
  </main>
</template>

<style>
.kt-map {
  width: 100%;
  height: 100%;
}
</style>
