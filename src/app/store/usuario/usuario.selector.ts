import { Selector } from '@ngxs/store';
import { UsuarioState } from './usuario.state';
import { UsuarioStateModel } from './usuario.state.model';

export class UsuarioSelector {
  @Selector([UsuarioState])
  static isLogged(state: UsuarioStateModel) {
    return state.usuario ? true : false;
  }

  @Selector([UsuarioState])
  static usuario(state: UsuarioStateModel) {
    return state.usuario;
  }
}
