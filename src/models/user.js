class User {
  constructor(user) {
    this.id = user[`id`];
    this.email = user[`email`];
    this.name = user[`name`];
    this.avatarUrl = user[`avatar_url`];
    this.isPro = user[`is_pro`];
  }

  static parseUser(userInfo) {
    return new User(userInfo);
  }
}

export default User;
