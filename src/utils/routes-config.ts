export const BASE_URL = '/';

const IS_LOCAL = true;
export const API_URL = IS_LOCAL
  ? 'http://localhost:8888/'
  : 'https://us-central1-test-c67b0.cloudfunctions.net/instadriver/';

export const RouteFor = {
  Index: `/`,
  Login: `/login`,
  Register: `/register`,
  InstActions: `/actions`,
  InstAccounts: `/accounts`,
};
