const express = require('express');
const {getMovieByPage, getUpcomingMovies, searchMovies} = require('../tmdb-api');
const movieModel = require('./movieModel');

const router = express.Router(); // eslint-disable-line

router.get('/', (req, res, next) => {
	try {
		movieModel.find().then(movies => res.status(200).send(movies))
	} catch (err) {
		next(err)
	}
});

router.get('/page/:page', async (req, res, next) => {
	const page = parseInt(req.params.page)
	try {
		const movie = await movieModel.findOne({ "page": page })
		if (movie) {
			console.log('Load in the database')
			movieModel.find({ "page": page }).then(movies => res.status(200).send(movies)).catch(err => next(err))
		} else {
			console.log('Load from the TMDB and store')

			const movies = await getMovieByPage(page)
			movies.forEach(movie => {
				movie.page = page
			})
			await movieModel.collection.insertMany(movies)
			res.status(200).send(movies)
		} 
	}catch (err) {
		next(err)
	}
})

router.get('/:id', (req, res, next) => {
	const id = parseInt(req.params.id);
	movieModel.findByMovieDBId(id).populate("reviews").then(movie => res.status(200).send(movie)).catch(err => next(err));
});

router.get('/upcoming/:page', async (req, res, next) => {
	const page = parseInt(req.params.page)
	try {
		const movie = await movieModel.findOne({ "upcomingPage": page })
		if (movie) {
			console.log('Load in the database')
			movieModel.find({ "upcomingPage": page }).then(movies => res.status(200).send(movies)).catch(err => next(err))
		} else {
			console.log('Load from the TMDB and store')

			const movies = await getUpcomingMovies(page)
			movies.forEach(movie => {
				movie.upcomingPage = page
			})
			movies.forEach(async movie => {
				const isExist = await movieModel.findOne({ "id": movie.id })
				if (!isExist) {
					await movieModel.create(movie)
				} else {
					await movieModel.findOneAndUpdate({ "id": movie.id }, movie)
				}
			})
			res.status(200).send(movies)
		} 
	}catch (err) {
		next(err)
	}
})

router.get('/search/:query', async (req, res, next) => {
	const query_string = "" + req.params.query
	try {
		const movies = await searchMovies(query_string)
		res.status(200).send(movies)
	} catch(err) {
		next(err)
	}
})

module.exports = router;

