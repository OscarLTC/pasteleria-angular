import { Selector } from '@ngxs/store';
import { CarritoState } from './carrito.state';
import { CarritoStateModel } from './carrito.state.model';

export class CarritoSelector {
  @Selector([CarritoState])
  static pasteles(state: CarritoStateModel) {
    return state.pasteles;
  }

  @Selector([CarritoState])
  static items(state: CarritoStateModel) {
    return state.pasteles.length;
  }
}
