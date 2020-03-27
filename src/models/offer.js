class Offer {
  constructor(offer) {
    this.bedrooms = offer[`bedrooms`];
    this.city = offer[`city`];
    this.description = offer[`description`];
    this.goods = offer[`goods`];
    this.host = {
      avatarUrl: offer.host[`avatar_url`],
      id: offer.host[`id`],
      isPro: offer.host[`is_pro`],
      name: offer.host[`name`]
    };
    this.id = offer[`id`];
    this.images = offer[`images`];
    this.isFavorite = offer[`is_favorite`];
    this.isPremium = offer[`is_premium`];
    this.location = offer[`location`];
    this.maxAdults = offer[`max_adults`];
    this.previewImage = offer[`preview_image`];
    this.price = offer[`price`];
    this.rating = offer[`rating`];
    this.title = offer[`title`];
    this.type = offer[`type`];
  }

  toRAW() {
    return {
      'bedrooms': this.bedrooms,
      'city': this.city,
      'description': this.description,
      'goods': this.goods,
      'host': {
        'avatar_url': this.host.avatarUrl,
        'id': this.host.id,
        'is_pro': this.host.isPro,
        'name': this.host.name
      },
      'id': this.id,
      'images': this.images,
      'is_favorite': this.isFavorite,
      'is_premium': this.isPremium,
      'location': this.location,
      'max_adults': this.maxAdults,
      'preview_image': this.previewImage,
      'price': this.price,
      'rating': this.rating,
      'title': this.title,
      'type': this.type
    };
  }

  static parseOffer(offer) {
    return new Offer(offer);
  }

  static parseOffers(offers) {
    return offers.map(Offer.parseOffer);
  }
}

export default Offer;
