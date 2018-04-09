export enum NetworkStatus {
  None,
  Started,
  Done,
  Failed,
}

export interface IWithNetworkStatus<T> {
  data: T;
  networkStatus: NetworkStatus;
}

export function createDefaultWithNetworkStatus<T>(data: T): IWithNetworkStatus<T> {
  return {
    data,
    networkStatus: NetworkStatus.None,
  };
}

export function isNetworkStatusLoading(networkStatus: NetworkStatus) {
  return [NetworkStatus.None, NetworkStatus.Started].includes(networkStatus);
}
