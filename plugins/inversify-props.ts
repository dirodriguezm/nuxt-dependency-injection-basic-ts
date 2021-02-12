import 'reflect-metadata'
import { container } from 'inversify-props'
import { SampleService } from '~/services/SampleService'
import { StoreCreator, Storage } from '~/storage/Storage'

container.addTransient(SampleService, 'SampleService')
container.addSingleton(StoreCreator, 'StoreCreator')
container.addSingleton(Storage, 'Storage')
