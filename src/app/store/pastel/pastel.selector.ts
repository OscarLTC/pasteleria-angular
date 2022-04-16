import { Selector } from '@ngxs/store';
import { PastelState } from './pastel.state';
import { PastelStateModel } from './pastel.state.model';

export class PastelSelector {
  @Selector([PastelState])
  static pasteles(state: PastelStateModel) {
    return state.pasteles;
  }
}
