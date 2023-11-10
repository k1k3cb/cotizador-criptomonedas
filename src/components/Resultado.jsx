import styled from 'styled-components';

const Result = styled.div`
	color: #fff;
	font-family: 'Lato', sans-serif;
    display: flex;
    align-items:center;
    gap: 1em;
    margin-top: 30px;
`

const Imagen = styled.img`
display: block;
width: 120px;`

const Texto = styled.p`
	font-size: 18px;
	span {
		font-weight: 700;
	}
`;
const Precio = styled.p`
	font-size: 24px;
	span {
		font-weight: 700;
	}
`;

const Resultado = ({ resultado }) => {
	console.log(resultado);

	const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
		resultado;
	return (
		<Result>
			<Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt='imagen cripto' />
			<div>
				<Precio>
					El precio es de: <span>{PRICE}</span>
				</Precio>
				<Texto>
					El precio mas alto del día: <span>{HIGHDAY}</span>
				</Texto>
				<Texto>
					El precio mas bajo del día: <span>{LOWDAY}</span>
				</Texto>
				<Texto>
					Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
				</Texto>
				<Texto>
					Últimas actualización: <span>{LASTUPDATE}</span>
				</Texto>
			</div>
		</Result>
	);
};

export default Resultado;
