import * as React from 'react';

const NotFoundPage = () => {
  return (
    <main className="page__main page__main--index page__main--index-empty">
      <div className="cities">
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">
                Page not found
              </b>
              <p className="cities__status-description">
                Maybe you were wrong when entering link
              </p>
            </div>
          </section>
          <div className="cities__right-section"></div>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
