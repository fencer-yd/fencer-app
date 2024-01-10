declare module "type/saga" {
  export interface IAction {
    type: string;
    payload?: any;
  }
}

declare namespace Store {
  interface HomeState {
    loading: boolean;
    number: number;
  }

  interface Instance {
    home: HomeState;
  }
}
