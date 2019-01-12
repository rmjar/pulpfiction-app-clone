import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";


class Favourites extends Component {

    handleDelete = fav => console.log(fav.uuid, fav.name);

    filterByUuid = (favUuid) => {
        const { match: { params: { uuid } } } = this.props;
        return favUuid === uuid || uuid === undefined;
    }

    renderSingleFavourite(fav) {
        console.log(fav);
        const { name } = fav;
        return <div>
            <div>{name}</div>
            <div></div>
        </div>
    }

    renderFavourite = (fav) => {
        const { uuid, name } = fav;
        return <div key={uuid}>
            <li><Link key={uuid} to={`/favourites/${uuid}`}>{`${name}`} </Link>
                <button onClick={() => this.handleDelete(fav)}>Remove</button>
            </li>
        </div>
    }

    render() {
        const { match: { params: { uuid} }, favourites: favs } = this.props;
        return <Fragment>
            <h2>Favourites</h2>
            {
                favs
                    .filter(this.filterByUuid)
                    .map(this.renderFavourite)
            }
            {
                uuid &&
                <div>
                    {this.renderSingleFavourite(...favs.filter(f => f.uuid === parseInt(uuid, 10))) }
                    <Link to="/favourites">Full list</Link>
                </div>
            }
        </Fragment>;
    }
}

export default Favourites;