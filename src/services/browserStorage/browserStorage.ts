import {StoreAPI} from 'store2';
import { StorageKeys } from './interface';

export class BrowserStorage {
  private storage: StoreAPI;

  public constructor(store: StoreAPI) {
    this.storage = store.namespace('poll_app');
  }

  public setAccessToken(accessToken): void {
    this.storage.set(StorageKeys.AccessToken, accessToken);
  }

  public getAccessToken(): string {
    return this.storage.get(StorageKeys.AccessToken);
  }
}
