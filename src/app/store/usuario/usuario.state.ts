import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { ClearUsuario, StoreUsuario } from './usuario.action';
import { UsuarioStateModel } from './usuario.state.model';

@State<UsuarioStateModel>({
  name: 'usuario',
  defaults: {
    usuario: null,
  },
})
@Injectable()
export class UsuarioState {
  @Action(StoreUsuario)
  almacenarUsuario(ctx: StateContext<UsuarioStateModel>, action: StoreUsuario) {
    const state = ctx.getState();
    console.log(action);
    ctx.setState({
      ...state,
      usuario: action.usuario,
    });
  }
  @Action(ClearUsuario)
  limpiarUsuario(ctx: StateContext<UsuarioStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      usuario: null,
    });
  }
}
