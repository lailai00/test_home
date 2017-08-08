<template>
   <div  id="demo">
<div id="container" style="height:300px;width:50%"></div>

</div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        currentBranch: 'AnyChart',
        chartJson: {},
        props: {},
        ready: false,
        currentGenre: 'bar',
        is3D: false,
        ifhighchart: false,
        theme: 'defaultTheme|defaultPalette',
        palette: 'defaultPalette',
        isShow: true,
        selected: 'normal'
      }
    },
    created: function () {
      this.drawChart()
    },
    methods: {
      drawChart: function () {
        alert('$$$')
        this.$store.state.genre = this.currentGenre
        this.$store.state.engine = this.currentBranch
        this.$store.dispatch('drawChart')
      }
    }
  }
</script>
