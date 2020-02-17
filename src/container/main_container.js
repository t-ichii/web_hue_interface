import React from 'react';
import Main from '../components/main';
import hue_client from '../api/hue'


class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      lights: []
    }
  }

  componentDidMount() {
    hue_client.post('/api', {'devicetype': 'test_node', }).then(response => {
      console.dir(response);
      if (response.data[0].success !== undefined) {
        this.setState({
          username: response.data[0].success.username
        })
      }
    })
  }

  getLights() {
    if (this.state.username === null) {
      return
    }
    hue_client.get(`/api/${this.state.username}/lights`).then(response => {
      const lights = Object.keys(response.data).map(key => {
        return {...response.data[key], id: key}
      });
      console.dir(lights);
      this.setState({lights});
    })
  }

  switchLight(id, on) {
    hue_client.put(`/api/${this.state.username}/lights/${id}/state`, {on}).then(response => {
      this.getLights()
    });
  }

  render() {
    console.dir(this.state);
    return <Main {...this.state} getLights={this.getLights.bind(this)} switchLight={this.switchLight.bind(this)}/>;
  }
}

export default MainContainer;
