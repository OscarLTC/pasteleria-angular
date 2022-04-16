import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { AddPastel, LimpiarCarrito, RemovePastel } from './carrito.actions';
import { CarritoStateModel } from './carrito.state.model';

@State<CarritoStateModel>({
  name: 'carrito',
  defaults: {
    pasteles: [],
  },
})
@Injectable()
export class CarritoState {
  //revisar
  @Action(AddPastel)
  añadirPastel(ctx: StateContext<CarritoStateModel>, action: AddPastel) {
    const state = ctx.getState();
    let pasteles = state.pasteles.slice();

    if (pasteles.find((pastel) => pastel.id === action.pastel.id)) {
      pasteles = pasteles.map((pastel) => {
        const nuevoPastel = Object.assign({}, pastel);
        if (nuevoPastel.id === action.pastel.id) {
          nuevoPastel.cantidad += action.pastel.cantidad;
        }

        return nuevoPastel;
      });
    } else {
      pasteles.push(action.pastel);
    }

    ctx.setState({
      ...state,
      pasteles,
    });
  }

  @Action(RemovePastel)
  quitarPastel(ctx: StateContext<CarritoStateModel>, action: RemovePastel) {
    const state = ctx.getState();
    let pasteles = state.pasteles.filter((pastel) => pastel.id !== action.id);

    ctx.setState({
      ...state,
      pasteles,
    });
  }

  @Action(LimpiarCarrito)
  limpiarCarrito(ctx: StateContext<CarritoStateModel>) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      pasteles: [],
    });
  }
}
