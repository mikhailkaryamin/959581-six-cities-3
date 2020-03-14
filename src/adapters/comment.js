class Comment {
  constructor(comment) {
    this.comment = comment[`comment`];
    this.date = new Date(comment[`date`]);
    this.id = comment[`id`];
    this.rating = comment[`rating`];
    this.user = {
      avatarUrl: comment.user[`avatar_url`],
      id: comment.user[`id`],
      isPro: comment.user[`is_pro`],
      name: comment.user[`name`]
    };
  }

  toRAW() {
    return {
      'comment': this.comment,
      'date': this.date.toISOString(),
      'id': this.id,
      'rating': this.rating,
      'user': {
        'avatar_url': this.user.avatarUrl,
        'id': this.user.id,
        'is_pro': this.user.isPro,
        'name': this.user.name
      }
    };
  }

  static parseComment(comment) {
    return new Comment(comment);
  }

  static parseComments(comments) {
    return comments.map(Comment.parseComment);
  }
}

export default Comment;
