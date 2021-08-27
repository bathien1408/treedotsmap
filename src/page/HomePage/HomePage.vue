<style src="./HomePage.scss"  lang="scss"></style>
<script src="./HomePage.js"></script>

<template>
  <div class="home-page">
    <div class="d-flex flex-wrap justify-content-center py-5">
        <h1 class="fs-2 header">Locate Hub</h1>
    </div>
    <gmap v-bind:dataHub="dataHub" v-if="isFetching" ref="gmap" @select-hub="selectHub" />
    <br>
    <div class="list-hub">
    <h1> Hubs Near You </h1>
    <table class="table ">
      <tbody>
        <tr class="align-middle" v-for="(place,index) in dataHub" v-show="place.visible" @click="selectHub(index)" >
          <td scope="row"> <h3>{{place.name}} </h3> </td>
          <td> <div class="label-circle"> {{ anphabetIndex (index) }} </div></td>
        </tr>
        </tbody>
        </table>
     </div>
     <div class="container">
        <div class="row">
          <div class="col text-center">
            <div class="btn btn-secondary btn-lg btn-block  btn-search col-10 " disabled>Search Hub</div>
          </div>
        </div>
        </div>
    <br>
  </div>
</template>

