<style src="./gmap.scss" module lang="scss"></style>
<script src="./gmap.js"></script>

<template>
<div>
    <gmap-map
      :center="center"
      :zoom="14"
       :options="mapOptions"
      style="width:100%;  height: 400px;"
      ref="mapRef"
    >
      <gmap-marker
        :key="index"
        v-for="(marker, index) in markers"
        :position="marker.location"
        :label="getLabel(marker)"
        @click="clickMarker(index)"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>
