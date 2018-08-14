import React, { Component } from 'react'
import Loader from '../../Components/Loader'

class SingleSeries extends Component {
    state = {
        show: null
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
            .then(response => response.json())
            .then(json => this.setState({ show: json }));
            
    }

    render() {

        const { show } = this.state;
        console.log(show);
        return (
            <div className="container">
                {show === null && <Loader />}
                {
                    show !== null
                    &&
                    <div className="row">
                        <div className=" col-sm" >

                            <h1 >Série:<br />{show.name}</h1>
                        </div>
                        <div className="img-thumbnail col-sm" >
                            <br />
                            <img alt="Show" src={show.image.medium} />
                        </div>
                        <div className=" col-sm">
                            <div className="h2" >Ano de estreia :<br />{show.premiered}</div>
                            <p className="h4">Notas - {show.rating.average}</p>
                            <p className="h4">Gêneros da serie: {show.genres}</p>
                            <p className="h4">Quantidade de episodios {show._embedded.episodes.length}</p>




                        </div>
                    </div>
                }

            </div>
        );
    }


}

export default SingleSeries;