declare module "type/saga" {
  export interface IAction {
    type: string;
    payload?: any;
  }
}
