import Vue from 'vue';

Vue.mixin({
  methods: {
    uuidv4() {
      return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
      );
    },
    rpc(target, method, payload) {
      if (!target)
        return { success: false, msg: "Invalid target" };
      let res = {};
      this.$fire.database.ref('rpc/' + target + '/' + this.uuidv4()).set({
        method: method,
        timestamp: Date.now(),
        payload: payload != null ? payload : {}
      })
        .catch(e => {
          res = {success: false, msg: e};
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
        res = {success: false, msg: e};
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
