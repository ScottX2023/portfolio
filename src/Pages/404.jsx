import { Link } from 'react-router-dom';
import '../Sass/404.scss';

function ErrorPage() {
	return (
		<div className='notFound'>
			<div className="notFound_infos">
				<h1 className='notFound_infos_title'>404</h1>
				<p className='notFound_infos_content'>Oups! La page que vous demandez n'existe pas.</p>
			</div>
				<Link className='notFound_infos_return' to='/'>Retourner sur la page d'accueil</Link>
		</div>
	)
}

export default ErrorPage;