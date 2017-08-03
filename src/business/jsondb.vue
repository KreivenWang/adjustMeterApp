<template>
  <div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vinstance: null
    };
  },
  methods: {
    loadDb(vobj) {
      console.log('test1');
      console.log(vobj);
      vobj.$http.get('/static/data/db.json')
        .then(response => {
          let db = response.data;
          vobj.$store.commit('platAddressModification', db.platAddress);
          vobj.$store.commit('platPortModification', db.platPort);
          console.log('load db.json successfully.');
          console.log('platUrl: ' + vobj.$store.getters.getPlatUrl);
        })
        .catch(err => {
          console.log('load db.json failed: ' + err);
        });
    }
  },
  mounted() {
    this.vinstance = this;
  }
};
</script>

<style>

</style>
