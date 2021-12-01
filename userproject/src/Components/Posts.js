import React, { Component } from 'react';
import axios from 'axios';
import Postsform from './Postsform';

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      postDatastate: false,
      items: [],
      EditpostData: false,
      updatedpostEdit: [],
    };
  }
  componentDidMount() {
    this.getAllposts()
  }

  getAllposts = () => {
    fetch("http://localhost:3005/posts")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,

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
  getPostSavedata = (data) => {
    console.log(data)
    try {
      axios.post('http://localhost:3005/posts', { ...data }).then(() => {
        this.getAllposts();
      });
    } catch (error) {
      this.setState({
        error
      })
    }
    // this.getAllUsers();
    this.setState({
      postDatastate: false
    })

  }

  newPostdataadd = () => {
    console.log("data add")
    this.setState({
      postDatastate: true
    })
  }

  CancelPostform = () => {
    console.log("formcancel")
    this.setState({
      postDatastate: false
    })
  }

  handlepostDelete = (id) => {
    axios.delete(`http://localhost:3005/posts/${id}`).then(() => this.getAllposts());

  }

  handlepostEdit = (item) => {
    this.setState({
      EditpostData: true
    });
    this.setState({ updatedpostEdit: [item] })
  }

  handlepostUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3005/posts/${this.state.updatedpostEdit[0].id}`, { ...this.state.updatedpostEdit[0] }).then(()=> this.getAllposts());
    this.setState({EditpostData: false})
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

          <div>
            {!this.state.postDatastate && <input type="button" value="Add new Post" onClick={this.newPostdataadd} ></input>}
            {this.state.postDatastate && <Postsform Cancel={this.CancelPostform} savepostData={this.getPostSavedata} />}
            <br />
          </div>
          <div>{this.state.EditpostData ?
            <form onSubmit={this.handlepostUpdate}>
              <br />
              UserId :  <input type="number" name="uid" onChange={(e) => {
                const updatedpostEdit = { ...this.state.updatedpostEdit };
                updatedpostEdit[0].userId = e.target.value;
                this.setState({ updatedpostEdit });
              }} value={this.state.updatedpostEdit[0].userId} ></input><br /><br />


              Title :  <input type="text" name="title" onChange={(e) => {
                const updatedpostEdit = { ...this.state.updatedpostEdit };
                updatedpostEdit[0].title = e.target.value;
                this.setState({ updatedpostEdit });
              }}
                value={this.state.updatedpostEdit[0].title} ></input><br /><br />
              Body :  <input type="text" name="body" onChange={(e) => {
                const updatedpostEdit = { ...this.state.updatedpostEdit };
                updatedpostEdit[0].body = e.target.value;
                this.setState({ updatedpostEdit });
              }}
                value={this.state.updatedpostEdit[0].body} ></input><br /><br />


              <button >Cancel</button>
              <button type="submit" >Update</button>

              {/* <button onClick={()=>LoadEditData}>esss</button> */}
              <br />
              <br />
            </form> : null}</div>
          <ul>
            {items.map(item => (
              <li key={item.id} style={{ listStyle: 'none', display: 'flex', marginBottom: '20px', marginTop: '15px' }}>
                <div style={{ marginRight: '15px' }} >
                  UserId : {item.userId} <br/>
                  Title :<br /> {item.title}<br />
                  Body : <br /> {item.body}
                  <br />

                  <br /><button onClick={() => this.handlepostEdit(item)}>Edit</button>
                  <div><button onClick={() => this.handlepostDelete(item.id)} >Delete</button> </div>
                  <hr></hr>
                </div>


              </li>
            ))}
          </ul>
        </>
      )
    }
  }
}
