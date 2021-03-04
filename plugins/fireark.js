import Vue from 'vue';

Vue.mixin({
  methods:{
    rpc (target, method, payload) {
      let res = {};
      this.$fire.database.ref('rpc').set({
        target: target,
        method: method,
        payload: payload
      })
        .catch(e => {
          res = { success: false, msg: e};
        })
        .then(r => {
          res = {
            success: true, msg: "RPC Successfully sent"
          };
        });

      return res;
    },
  }
})

// https://stackoverflow.com/questions/57659169/vue-nuxt-how-to-define-a-global-method-accessible-to-all-components
export default (context, inject) => {
  const rpc = (target, method, payload) => {
    let res = {};
    this.$fire.database.ref('rpc').set({
        target: target,
        method: method,
        payload: payload
      })
        .catch(e => {
          res = { success: false, msg: e};
        })
        .then(r => {
          res = {
            success: true, msg: "RPC Successfully sent"
          };
        });

    return res;
  };

  // Inject in Vue, context and store.
  inject('rpc', rpc);
};
