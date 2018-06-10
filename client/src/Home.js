import React from 'react';
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: false
    };
  }

  componentDidMount() {
    fetch('api/chess', {headers:{'Content-Type':'application/json'},method:'POST',body:JSON.stringify({parent:'yes'})})
    .then(res=>res.json())
    .then(data=>setTimeout(()=>this.setState({data:data}),1000))
    .catch(err=>console.log(err));
  }

  render() {
    return (
      <div className="Home">
        <div>{this.state.data?this.state.data.parent:'no'}</div>
      </div>
    );
  }
}

export default Home;

  //  if (prevState.api !== this.state.api) {
  //     // check api POST
  //     options = {
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       method: 'post',
  //       body: JSON.stringify({"database":"default","dbCollection":"entries"})
  //     };
  //     this.api('/api/entries', options, 'post');
  //   }
  //   else if (prevState.post !== this.state.post) {
  //     // check api GET
  //     options = {accept: 'application/json'};
  //     this.api('/api/entries', options, 'get');
  //   }

  // api(url,options,stateKey) {
  //   fetch(url, options)
  //   .then(res => res.json())
  //   .then(data => {
  //     var newState = {};
  //     newState[stateKey] = data;
  //     setTimeout(() => this.setState(newState), this.state.delay)
  //   })
  //   .catch(err => console.log('ERR:', err));
  // }