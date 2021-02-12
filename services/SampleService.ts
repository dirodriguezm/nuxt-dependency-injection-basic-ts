import { ISampleService } from './SampleService.types'

export class SampleService implements ISampleService {
  sayHi(): string {
    return 'Hello from service'
  }
}
