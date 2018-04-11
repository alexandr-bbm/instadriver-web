export type InstAccountBase = {
  nickname: string;
  password: string;
};

export type InstAccount = InstAccountBase & {
  id: string;
  userId: string; // account owner
  status: InstAccountStatus;

  session: any;
  device: any;
};

type InstActionType = 'addInstAccount' | 'singlePhoto'
type InstActionStatus = 'started' | 'failed' | 'done'
type InstAccountStatus = 'ok' | 'error'

type InstActionMeta = {
  data: any;
  error: any;
}

type InstAction = {
  type: InstActionType;
  status: InstActionStatus;
  createTimestamp: number;
  instAccountId: number; // account which owns
  userId: number; // user which owns
  meta: InstActionMeta;
}

type dbInstAccounts = {
  instAccounts: {
    [instAccountId: string]: InstAccount
  }
}

type dbInstActions = {
  instActions: {
    [instAccountId: string]: InstAction
  }
}

type db = dbInstAccounts & dbInstActions;