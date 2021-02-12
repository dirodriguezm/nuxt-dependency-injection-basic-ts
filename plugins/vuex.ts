import { StoreCreator } from '../storage/Storage'
import Vuex, { Store } from 'vuex'
import Vue from 'vue'
import { cid, container } from 'inversify-props'
Vue.use(Vuex)

const storeCreator = container.get<StoreCreator>(cid.StoreCreator)

declare module 'vue/types/vue' {
  interface Vue {
    $store: Store<any>
  }
}

Vue.prototype.$store = storeCreator.makeStore()
