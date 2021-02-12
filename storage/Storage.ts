import Vuex, { Store } from 'vuex'
import SampleStore, { ISampleState } from '../storage/SampleStore'
import { inject } from 'inversify-props'
import { getModule } from 'nuxt-property-decorator'

export interface IRootState {
  sample: ISampleState
}

interface IStoreCreator {
  makeStore(): Store<IRootState>
}

export class StoreCreator implements IStoreCreator {
  private store: Store<IRootState> | null = null
  makeStore(): Store<IRootState> {
    if (!this.store) {
      this.store = new Vuex.Store<IRootState>({
        modules: {
          sample: SampleStore,
        },
      })
    }
    return this.store
  }
}

export class Storage {
  private sampleStore: SampleStore
  constructor(@inject('StoreCreator') storeCreator: IStoreCreator) {
    const store = storeCreator.makeStore()
    this.sampleStore = getModule(SampleStore, store)
  }
  getStores() {
    return { sampleStore: this.sampleStore }
  }
}
