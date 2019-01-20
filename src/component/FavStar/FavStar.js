import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './FavStar.css'


class FavStar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favs: []
    }
  }

  componentDidMount() {
    fetch('https://pulp-fitness.firebaseio.com/fav.json', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ favs: this.mapToArray(data) });
      });
  }

  addToFav(cat, id) {
    const data = {
      category: cat,
      referenceId: id,
      userId: 1 //do zmiany
    }

    fetch('https://pulp-fitness.firebaseio.com/fav.json', {
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(response => response.json());
  }

  removeFromFav(cat, id) {
    const data = {
      deleted: true
    }

    const favId = this.state.favs.find(fav => fav.category === cat && fav.referenceId === id && fav.userId === 1).key;
    console.log(favId);
    fetch('https://pulp-fitness.firebaseio.com/fav/' + favId +'.json', {
      method: 'PATCH',
      body: JSON.stringify(data)
    })
      .then(response => response.json());
  }

  mapToArray(ob) {
    return Object.entries(ob).map(e => Object.assign(e[1], { key: e[0] }))
  }

  render() {
    const { content } = this.props;
    return <div>
      <button type="buttons" onClick={() => this.addToFav(this.props.category, this.props.id)}>Dodaj do ulubionych</button>
      <button type="buttons" onClick={() => this.removeFromFav(this.props.category, this.props.id)}>Usuń ulubionych</button>
    </div>
  }

}

export default FavStar;
