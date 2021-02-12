import {
  Module,
  VuexModule,
  VuexMutation,
  VuexAction,
} from 'nuxt-property-decorator'
import { Inject } from 'inversify-props'
import { ISampleService } from '~/services/SampleService.types'

export interface ISampleState {
  sampleService: ISampleService
  saludo: string
}

@Module({
  name: 'sample',
  stateFactory: true,
  namespaced: true,
})
export default class SampleStore extends VuexModule implements ISampleState {
  @Inject() sampleService!: ISampleService

  greeting: string = ''

  @VuexMutation
  setGreeting(greeting: string) {
    this.greeting = greeting
  }

  @VuexAction({ rawError: true })
  useService() {
    const greeting: string = this.sampleService.sayHi()
    this.setGreeting(greeting)
  }
}
