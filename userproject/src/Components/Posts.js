import React, { Component } from 'react'

export default class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
    }
    componentDidMount() {
        fetch("http://localhost:3005/posts")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result
              });
            },
         
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
      render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
              <>
              <h1>this is Posts</h1>
            <ul>
              {items.map(item => (
                <li key={item.id}  style={{listStyle:'none'}}>
                  {item.title} 
                </li>
              ))}
            </ul>
            </>
        )
    }
}
} 
