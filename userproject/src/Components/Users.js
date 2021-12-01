import axios from 'axios';
import React, { Component } from 'react';

import Form from './Form';

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      Adddatastate: false,
      EditData: false,
      updatedEdit: [],
    };
  }
  componentDidMount() {
    this.getAllUsers()
  }

  getAllUsers = () => {
    fetch("http://localhost:3005/users")
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

    // const datafetch=await axios.get("http://localhost:3005/users")
    // this.setState({
    //   items:datafetch.data
    // })
  }

  newdataadd = () => {
    console.log("data add")
    this.setState({
      Adddatastate: true
    })
  }
  Cancelform = () => {
    console.log("formcancel")
    this.setState({
      Adddatastate: false
    })
  }

  getSavedata = async (data) => {
    // const userprevdata = {
    //   ...data
    // }
    try {
      const response = await axios.post('http://localhost:3005/users', { ...data });
      console.log(response)
      const arr = [...this.state.items, response.data];
      console.log(arr)
      this.setState({
        items: arr
      })
    } catch (error) {
      this.setState({
        error
      })
    }
    // this.getAllUsers();
    this.setState({
      Adddatastate: false
    })

  }


  // getSavedata =  (data) => {
  //     try {
  //     axios.post('http://localhost:3005/users', {...data}).then(()=>{
  //       this.getAllUsers();
  //     });
  //     } catch (error) {
  //       this.setState({
  //         error
  //       })
  //     }
  //     // this.getAllUsers();
  //     this.setState({
  //       Adddatastate: false
  //     })

  //   }

  handleDelete = (id) => {
    axios.delete(`http://localhost:3005/users/${id}`).then(()=>this.getAllUsers());
    //  console.log(iddata)
    
  }
  handleEdit = (item) => {
    this.setState({
      EditData: true
    });
    this.setState({ updatedEdit: [item] })
  }

  handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3005/users/${this.state.updatedEdit[0].id}`, { ...this.state.updatedEdit[0] }).then(()=> this.getAllUsers());
    this.setState({EditData: false})
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
          <h1>this is Users</h1>
          <div>
            {!this.state.Adddatastate && <input type="button" value="Add new user" onClick={this.newdataadd} ></input>}
            {this.state.Adddatastate && <Form Cancel={this.Cancelform} saveData={this.getSavedata} />}
            <br />
          </div>
          <div>{this.state.EditData ?
            <form onSubmit={this.handleUpdate}>
              <br />
              Name :  <input type="text" name="name" onChange={(e) => {
                var updatedEdit = { ...this.state.updatedEdit };
                updatedEdit[0].name = e.target.value;
                this.setState({ updatedEdit });
              }} value={this.state.updatedEdit[0].name} ></input><br /><br />
              Email :  <input type="text" name="email" onChange={(e) => {
                var updatedEdit = { ...this.state.updatedEdit };
                updatedEdit[0].email = e.target.value;
                this.setState({ updatedEdit });
              }}
                value={this.state.updatedEdit[0].email} ></input><br /><br />

              <button >Cancel</button>
              <button type="submit" >Update</button>

              {/* <button onClick={()=>LoadEditData}>esss</button> */}
              <br />
              <br />
            </form> : null}</div>
          <ul >
            {items.map((item) => (
              <li key={item.id} style={{ listStyle: 'none', display: 'flex',marginBottom:'20px',marginTop:'15px' }}>
                <div style={{marginRight:'15px'}}>   {item.name }</div>
                <div> {item.email}</div>
                <div> <button style={{ marginLeft: '30px' }} onClick={() => this.handleEdit(item)}>Edit</button> </div>
                <div><button onClick={() => this.handleDelete(item.id)} >Delete</button> </div>
              
              </li>
            ))}

          </ul>
        </>
      );
    }
  }
}