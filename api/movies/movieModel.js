const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const MovieSchema = new Schema({
  adult: { type: Boolean },
  id: { type: Number, required: true, unique: true },
  poster_path: { type: String },
  overview: { type: String },
  release_date: { type: String },
  original_title: { type: String },
  genre_ids: [{ type: Number }],
  original_language: { type: String },
  title: { type: String },
  backdrop_path: { type: String },
  popularity: { type: Number },
  vote_count: { type: Number },
  video: { type: Boolean },
  vote_average: { type: Number },
  production_countries: [{
    iso_3166_1: { type: String },
    name: { type: String }
  }],
  runtime: { type: Number },
  spoken_languages: [{
    iso_639_1: { type: String },
    name: { type: String }
  }],
  status: { type: String },
  tagline: { type: String },
  page: {type: Number},
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reviews'
  }, {collection: 'movies'}],
  upcomingPage: {type: Number},
  nowplayingPage: {type: Number},
  popularPage: {type: Number},
  topratedPage: {type: Number},
  trendingPage: {type: Number},
  recommend: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movies'
  }],
});

MovieSchema.statics.findByMovieDBId = function (id) {
  return this.findOne({ id: id });
};

module.exports = mongoose.model('Movies', MovieSchema);


