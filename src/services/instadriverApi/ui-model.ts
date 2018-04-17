type UIInstAccount = {
  uid: string;
  userId: string; // account owner
  nickname: string;
}

type AddInstAccountRequestPayload = {
  nickname: string;
  password: string;
}
