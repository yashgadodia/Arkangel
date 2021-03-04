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

    /**
     * Onboarding requests:
     - get all requests
     - get requests by status (new/pending/resolved)
     - get requests by id

     - create new request
     - update request parameters (id, full name, address, dob, emergency contact, id photo, status)
     - delete request by id

     For the report history
     -get all report history
     -get user details by user id
     -delete report
     -update report
     -get report by user id
     */
    databaseQuery(reference = 'users', filters) {
      if (!reference)
        throw error('Oi');

      let ref = this.$fire.database.ref(reference);

      // FilterItem = { key: '', value: '' }
      if (filters) {
        filters.forEach((filterItem) => {
          ref = ref.orderByChild(filterItem.key);

          if (filterItem.value)
            ref = ref.equalTo(filterItem.value);
        });
      }

      let res = [];

      ref.on('value', (snapshot) => {
        snapshot.forEach((innerSnapshot) => {
          res.push(innerSnapshot);
        });
      });

      return res;
    },
    users(id = null, onboardLv = -1) {
      let ref = this.$fire.database.ref('users');

      if (id)
        ref = ref.orderByKey().equalTo(id);

      if (onboardLv > -1)
        ref = ref.orderByChild('onboardLv').equalTo(onboardLv);

      let res = {}

      ref.on('value', (snapshot) => {
        res = snapshot.val();
      });

      return res;
    }
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

  const databaseQuery = (reference = 'users', filters) => {
    if (!reference)
      throw error('Oi');

    let ref = this.$fire.database.ref(reference);

    // FilterItem = { key: '', value: '' }
    if (filters) {
      filters.forEach((filterItem) => {
        ref = ref.orderByChild(filterItem.key);

        if (filterItem.value)
          ref = ref.equalTo(filterItem.value);
      });
    }

    let res = {}

    ref.on('value', (snapshot) => {
      res = snapshot.val();
    });

    return res;
  };

  // Inject in Vue, context and store.
  inject('databaseQuery', databaseQuery);
};
