<template>
  <div class="calendars">
  <table class="table table-hover product-table">
    <thead>
      <tr>
        <th>Date</th>
        <th>Services</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="svc_id, cal_date in calendars.full_calendar" v-on:click="onEdit(svc_id, cal_date, calendars.all_service_id)" v-if="svc_id.length!==0">
        <td>{{cal_date}}</td>
        <td>{{svc_id}}</td>
      </tr>
    </tbody>
  </table>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    calendars: 'getCalendars'
  }),
  methods: {
    onEdit (svcId, calDate, allServiceId) {
      var inactive = allServiceId.slice(0) // clone list of serviceId's
      for (var i = 0; i < svcId.length; i++) {
        if (inactive.includes(svcId[i])) {
          var index = inactive.indexOf(svcId[i])
          inactive.splice(index, 1)
        }
      }
      var calendarToEdit = {'d': calDate, 's': svcId, 'i': inactive}
      this.$emit('edit', calendarToEdit)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
