export const APIURL = {
  users: {
    login:
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBHVbEeg2VM9a7rnN2goO2RTiAyIaJiQvE',
  },
  posts: {
    all: 'posts',
    one: 'posts',
    add: 'posts',
    update: 'posts',
    delete: 'posts',
  },
  comments: {
    all: 'comments',
    one: 'comments',
    add: 'comments',
    update: 'comments',
    delete: 'comments',
  },
};

export interface IURL {
  all?: string;
  one?: string;
  add?: string;
  update?: string;
  delete?: string;
  block?: string;
}
