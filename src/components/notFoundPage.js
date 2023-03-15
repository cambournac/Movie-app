import React, { Component } from 'react';

class NotFoundPage extends Component {
  render(){
    return(
			<div className="page-not-found">
				<h1>Page Not Found =^( </h1>
				<p>Não há nada aqui</p>
				<p><a href="/"> Voltar atrás </a></p>
			</div>
		);
	}
};
export default NotFoundPage;