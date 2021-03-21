<template>
    <div>
      <Navbar/>
      {{dataset[0]}}
      <div class="grid grid-cols-6 gap-2 mx-12">
        <div>
          Name
        </div>
        <div>
          Phone Number
        </div>
        <div>
          Emergency Contact: <br> Name
        </div>
        <div>
          Emergency Contact: <br> Phone Number
        </div>
        <div>
          Emergency Contact: <br> Relationship
        </div>
        <div>
          Photo
        </div>
      </div>
      <div v-for="(item, index) in dataset" :key="index">
          <user-item
          :name = "item.name"
          :phoneNumber = "item.phoneNo"
          :EName = "ename"
          :EPhoneNumber = "ephone"
          :ERelationship = "ers"
          >
          Hello
          </user-item>
      </div>
    </div>
</template>

<script>
export default {
    name: "Users",
  data: function() {
      return {
        dataset: [],
        eContacts: [],
        ename: "",
        ephone:0,
        ers:""
      }
  },
  beforeUpdate(){
    let x = this.dataset[0]
    console.log(this.dataset);
    this.dataset.forEach(element => {
      console.log(element.emergencyContacts["0"].name);
      this.ename = element.emergencyContacts["0"].name
      this.ephone = element.emergencyContacts["0"].phoneNo
      this.ers = element.emergencyContacts["0"].relationship
    });
  },
  async fetch(){
    this.dataset = await this.databaseQuery('users')
  },
  // mounted() {
  //     let curUsers = this.dataset;
  //     this.databaseQuery('users').then(response => {
  //       response.forEach(res => {
  //         curUsers.push(res)
  //       })
  //       console.log(this.dataset);
  //     })
  // }
}
</script>
