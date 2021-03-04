<template>
  <div>
    <Navbar />
    <div class="mx-auto px-4 mt-16">
        <div class="grid grid-flow-col grid-cols-3 gap-4 mt-20 mb-9">
            <div><CardStats statSubtitle="New Requests" statTitle="345"/></div>
            <div><CardStats statSubtitle="Pending Resolution" statTitle="148" statIconColor="bg-yellow-400" /></div>
            <div><CardStats statSubtitle="Closed Requests" statTitle="421" statIconColor="bg-green-600"/></div>
        </div>
        <div class="pt-20 pb-5 grid grid-flow-col grid-cols-6 bg-gray-100 pl-3">
            <div>ID No.</div>
            <div>Full Name</div>
            <div>Address</div>
            <div>Date of Birth</div>
            <div>Emergency Contact</div>
            <div>Photo</div>
        </div>
        <div class="pt-3" v-for="request in this.rows" :key="request.id">
            <report-item
                :id="request.id"
                :fullname="request.fullname"
                :address="request.address"
                :dob="request.dob"
                :emergencyContact="request.emergencyContact"
                :photo="request.photo"
            >
            </report-item>
        </div>
    </div>
  </div>
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';
import Navbar from "../components/Navbar.vue"
import CardStats from '../components/CardStats.vue'
// import axios from 'axios'

export default {
    name: "Onboarding",
    // beforeCreate: function() {
    //     console.log(this.$databaseQuery())
    // },
    data() {
        return {
            columns: [
                {
                    label: 'ID No.',
                    field: 'id',
                },
                {
                    label: 'Full Name',
                    field: 'fullname',
                    type: 'string',
                },
                {
                    label: "Address",
                    field: 'address',
                    type: 'string'
                },
                {
                    label: 'Date of Birth',
                    field: 'dob',
                    type: 'date',
                    dateInputFormat: 'yyyy-MM-dd',
                    dateOutputFormat: 'MMM do yy',
                },
                {
                    label: 'Emergency Contact',
                    field: 'emergencyContact',
                    type: 'number',
                },
                {
                    label: 'Identification Photo',
                    field: 'photo',
                    type: 'url',
                },
            ],
            rows: [
                { id: 1, fullname: "John", address: "20", dob: '2011-02-11', emergencyContact: 56876, photo: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGljdHVyZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" },
                { id: 1, fullname: "John", address: "20", dob: '2011-02-11', emergencyContact: 56876, photo: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGljdHVyZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" },
            ],
            requests: []
        }
    },
    mounted() {
        // axios.get('https://run.mocky.io/v3/b1e7a249-a37c-4609-ba29-92e11d313cbd').then(response => (this.requests = response))
        // console.log(this.requests)
    },
    components: {
        VueGoodTable,
        CardStats,
        Navbar
    }
};
</script>