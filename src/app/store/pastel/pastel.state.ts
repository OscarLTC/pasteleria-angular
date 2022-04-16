import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { Pastel } from 'src/app/models/pastel.model';
import {
  BuscarPastelCategoria,
  BuscarPastelNombre,
  MostrarTodos,
} from './pastel.action';
import { PastelService } from './pastel.service';
import { PastelStateModel } from './pastel.state.model';

@State<PastelStateModel>({
  name: 'pastel',
  defaults: {
    pasteles: [],
  },
})
@Injectable()
export class PastelState {
  constructor(private service: PastelService) {}

  @Action(BuscarPastelCategoria)
  buscarPastelCetegoria(
    ctx: StateContext<PastelStateModel>,
    action: BuscarPastelCategoria
  ) {
    const state = ctx.getState();
    this.service
      .getPasteleByCategory(action.idCategoria)
      .subscribe((response: Pastel[]) => {
        ctx.setState({
          ...state,
          pasteles: response,
        });
      });
  }

  @Action(MostrarTodos)
  mostrarPasteles(ctx: StateContext<PastelStateModel>) {
    const state = ctx.getState();
    this.service.getPasteles().subscribe((response: Pastel[]) => {
      ctx.setState({
        ...state,
        pasteles: response,
      });
    });
  }

  @Action(BuscarPastelNombre)
  buscarPastelNombre(
    ctx: StateContext<PastelStateModel>,
    action: BuscarPastelNombre
  ) {
    const state = ctx.getState();
    this.service
      .getPasteleByNombre(action.nombre)
      .subscribe((response: Pastel[]) => {
        ctx.setState({
          ...state,
          pasteles: response,
        });
      });
  }
}
