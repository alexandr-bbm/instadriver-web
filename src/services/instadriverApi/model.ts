type InstAccount = {
  nickname: string;
  password: string;

  userId: number; // account owner
  status: InstAccountStatus;

  session: any;
  device: any;
}

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
  timestamp: number;
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