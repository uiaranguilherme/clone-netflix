const API_KEY = 'd7bf89c71a5ae858b5507df7e54d7a2c';
const API_BASE = 'https://api.themoviedb.org/3';
const IMG_BASE = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';

const basicFetch = async (endpoint) => {
		const req = await fetch(`${API_BASE}${endpoint}`);
		const json = await req.json();
		return json;
}


/*
 --> Originais Netflix;
 --> Recomendados(trending);
 --> em alta (top_rated)
 --> ação
 --> comédia
 --> terror
 --> romance
 -->documentarios
*/

	const getHomeList = async () => {
		return [
			{
				slug:'originals',
				title: 'Originais Netflix',
				item: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
			},
			{
				slug:'trending',
				title: 'Recomendados para Você',
				item: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
			},
			{
				slug:'top rated',
				title: 'Em Alta',
				item: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
			},
			{
				slug:'action',
				title: 'Filmes de Ação',
				item: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
			},
			{
				slug:'comedy',
				title: 'Filmes de Comédia',
				item: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
			},
			{
				slug:'horror',
				title: 'Filmes de Terror',
				item: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
			},
			{
				slug:'romance',
				title: 'Filmes de Romance',
				item: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
			},
			{
				slug:'documentary',
				title: 'Documentários',
				item: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
			},
		]
	}
const loadAll = async () => {
	let list = await getHomeList();
	return list;
	return Promise.resolve(data);
}


