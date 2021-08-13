
const listFull = loadAll().then((data) => {
	console.log(data);

	for (var c = 0; c < data.length; c++) {

		let divPai = document.getElementById('filmes');

		let h2 = document.createElement('h2');
		h2.innerText = `${data[c].title}`
		divPai.appendChild(h2);
		//DIV FILHO
		const divFilho = document.createElement('div');
		divFilho.setAttribute('class', 'lista');
		divFilho.setAttribute('id', `lista--${c}`);
		divPai.appendChild(divFilho);

		// Setas para direções de navegação:
		//LEFT
		let divLeft = document.createElement('div');
		divLeft.setAttribute('class', 'divLeft');
		let navLeft = document.createElement('i');
		navLeft.setAttribute('class', 'fas fa-chevron-left');
		navLeft.setAttribute('id', `moveLeft--${c}`);
		divFilho.appendChild(divLeft);
		divLeft.appendChild(navLeft);

		//RIGHT
		let divRigth = document.createElement('div');
		divRigth.setAttribute('class', 'divRigth');
		let navRigth = document.createElement('i');
		navRigth.setAttribute('class', 'fas fa-chevron-right');
		navRigth.setAttribute('id', `movRigth--${c}`);
		divFilho.appendChild(divRigth);
		divRigth.appendChild(navRigth);

		data[c].item.results.map((item) => {

			const img = document.createElement('img');
			img.setAttribute('src', `${IMG_BASE}${item.poster_path}`);

			divFilho.appendChild(img);
		});
	};

});
const featuredRandom = loadAll().then((data) => {

	let randomNumber = () => {
		let number = Math.floor(Math.random() * 8);
		return number;
	}

	let post = data[randomNumber()].item.results[randomNumber()].id;

	const featuredReq = async () => {
		// REQUISIÇÃO DA API 
		const consultaFilme = `https://api.themoviedb.org/3/movie/${post}?api_key=${API_KEY}&language=pt-BR`;
		const file = await fetch(`${consultaFilme}`);
		const featuredFile = await file.json();
		return featuredFile
	};

	const dataFeatured = featuredReq().then((data) => {
		// BACKGRAUND - PATH
		let BASE_POST_BACK = 'https://www.themoviedb.org/t/p/original';
		let backgraund = `${BASE_POST_BACK}${data.backdrop_path}`;
		// DATA DE LANÇAMENTO
		let date = new Date(data.release_date);
		let dateYear = date.getFullYear();
		// SINOPSE DO FILME
		const text = () => {
			let textP = data.overview;
			let textPC = textP.split(' ');
			let textSlice = textPC.slice(0, 22);
			let textFinal = textSlice.join(' ');
			return textFinal.concat('...');
		}

		//NOME DO FILME
		const titleFilme = () => {

			let textTitle = data.title;
			let textTitle2 = textTitle.split(' ');
			let textTitle3 = textTitle2.slice(0, 4).join(' ');

			if (textTitle2.length > 3) {
				let textTitleFinal = textTitle3.concat('...');
				return textTitleFinal;
			} else return textTitle3;

		};
		const back = () => {
			document.getElementById("featured").style.backgroundImage = `url(${backgraund})`;
			document.getElementById("featured--name").innerText = titleFilme();
			document.getElementById("featured--relevancia").innerText = `${data.vote_average} Pontos`;
			document.getElementById("featured--data").innerText = `${dateYear}`;
			document.getElementById("featured--sinopse").innerText = `${text()}`;

			data.genres.map((item) => {
				for (let c = 0; c < item.length; c++) {
					console.log(item[c].name)
					document.getElementById("featured--generos").innerText = `${item[c].name}`;
				}
			})
		};
		back()

	}).catch((err) => { console.log(err) });
	dataFeatured
});
featuredRandom

var i = [];


var filmes = document.getElementById('filmes');
filmes.onclick = function nameId(e) {
	var nn = e.target.id
	console.log(nn)
	var a = -150;
	var b = 150;
	if (nn === 'moveLeft--0' || nn === 'moveLeft--1' || nn === 'moveLeft--2' || nn === 'moveLeft--3' || nn === 'moveLeft--4' || nn === 'moveLeft--5' || nn === 'moveLeft--6' || nn === 'moveLeft--7' || nn === 'moveLeft--8' ) {
		moveLeft(a, nn)
	} else {
		moveRight(b, nn)
	}

}

// FUNÇÃO MOVE LEFT
function moveLeft(a, b) {
	i.push(a);
	var total = i.reduce((total, i) => total + i);
	console.log(i, total);

	if (total < -1800) {
		total = 0
		i = [150]
		
	}else{
		switch (b) {
			case 'moveLeft--0':
				document.getElementById('lista--0').style.marginLeft = `${total}px`;
				break;
			case 'moveLeft--1':
				document.getElementById('lista--1').style.marginLeft = `${total}px`;
				break;
			case 'moveLeft--2':
				document.getElementById('lista--2').style.marginLeft = `${total}px`;
				break;
			case 'moveLeft--3':
				document.getElementById('lista--3').style.marginLeft = `${total}px`;
				break;
			case 'moveLeft--4':
				document.getElementById('lista--4').style.marginLeft = `${total}px`;
				break;
			case 'moveLeft--5':
				document.getElementById('lista--5').style.marginLeft = `${total}px`;
				break;
			case 'moveLeft--6':
				document.getElementById('lista--6').style.marginLeft = `${total}px`;
				break;
			case 'moveLeft--7':
				document.getElementById('lista--7').style.marginLeft = `${total}px`;
				break;
			case 'moveLeft--8':
				document.getElementById('lista--8').style.marginLeft = `${total}px`;
				break;
		};
	}
};

//MOVE RIGHT
function moveRight(a, b) {
	i.push(a);
	var total = i.reduce((total, i) => total + i);
	console.log(i, total);

	switch (b) {
		case 'movRigth--0':
			document.getElementById('lista--0').style.marginLeft = `${total}px`;
			break;
		case 'movRigth--1':
			document.getElementById('lista--1').style.marginLeft = `${total}px`;
			break;
		case 'movRigth--2':
			document.getElementById('lista--2').style.marginLeft = `${total}px`;
			break;
		case 'movRigth--3':
			document.getElementById('lista--3').style.marginLeft = `${total}px`;
			break;
		case 'movRigth--4':
			document.getElementById('lista--4').style.marginLeft = `${total}px`;
			break;
		case 'movRigth--5':
			document.getElementById('lista--5').style.marginLeft = `${total}px`;
			break;
		case 'movRigth--6':
			document.getElementById('lista--6').style.marginLeft = `${total}px`;
			break;
		case 'movRigth--7':
			document.getElementById('lista--7').style.marginLeft = `${total}px`;
			break;
		case 'movRigth--8':
			document.getElementById('lista--8').style.marginLeft = `${total}px`;
			break;
	}
	if (total >= 0) {
		total = 0
		i = [-150]
	}
}