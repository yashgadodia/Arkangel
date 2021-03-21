<template>
  <div class="">
    <Navbar />
    <div class="mx-32">
      <div class="pt-20 pb-5 grid grid-flow-col grid-cols-6 bg-gray-100 pl-3">
        <div>Username</div>
        <div>User Id</div>
        <div>Location of Alert</div>
        <div>Time Alerted</div>
        <div>Time Dispatched</div>
        <div>Time Resolved</div>
      </div>
      <div class="pt-3" v-for="items in this.reportDetails" :key="item.userId">
        <report-item
          :username="items.username"
          :userId="items.userId"
          :locationOfAlert="items.locationOfAlert"
          :timeAlerted="items.timeAlerted"
          :timeDispatched="items.timeDispatched"
          :timeResolved="items.timeResolved"
        >
        </report-item>
      </div>
    </div>
  </div>
</template>

<script>
import ReportItem from "~/components/ReportItem.vue";

export default {
  data() {
    return {
      reportDetails: [
        {
          username: "John",
          userId: 1,
          locationOfAlert: "123",
          timeAlerted: "12:00:00",
          timeDispatched: "13:00:00",
          timeResolved: "14:00:00",
        },
        {
          username: "John",
          userId: 1,
          locationOfAlert: "123",
          timeAlerted: "12:00:00",
          timeDispatched: "13:00:00",
          timeResolved: "14:00:00",
        },
        {
          username: "John",
          userId: 1,
          locationOfAlert: "123",
          timeAlerted: "12:00:00",
          timeDispatched: "13:00:00",
          timeResolved: "14:00:00",
        },
        {
          username: "John",
          userId: 1,
          locationOfAlert: "123",
          timeAlerted: "12:00:00",
          timeDispatched: "13:00:00",
          timeResolved: "14:00:00",
        },
      ],
    };
  },
};
</script>