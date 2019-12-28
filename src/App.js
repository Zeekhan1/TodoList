import React, { Component } from "react";
import "./App.css";
import { render } from "@testing-library/react";

class App extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      preText: ["hey","Bye","ohh"],
      message:''
    };
  }
  addItem(e) {
    e.preventDefault();
    const { preText } = this.state;
    const newText = this.newText.value;

    const isOnTheList=preText.includes(newText);

    if(isOnTheList){
      this.setState({
        message:'This text is already in list'
      })

    } else{
    newText !=='' && this.setState({
      preText: [...this.state.preText, newText],
      message:''
    });
    }
    this.addForm.reset();
  }

  remText(item){
    const newTextItem =this.state.preText.filter(preText =>{
      return preText !==item;
    })
    this.setState({
      preText:[...newTextItem]
    })
  }

  render() {
    const { preText,message } = this.state;
    return (
      <div>
        <header>
          <h1>Add Text Here</h1>

          <form ref={input=>this.addForm=input}
            className="form-inline"
            onSubmit={e => {
              this.addItem(e);
            }}
          >
            <div className="form-group">
              <label className="sr-only" htmlFor="newItemInput">
                {" "}
                Add New Text
              </label>
              <input ref={input=>this.newText=input}
                type="text"
                className="form-control"
                id="newItemInput"
              ></input>
            </div>
            <button type="submit" className="btn btn-primary">
              ADD
            </button>
          </form>
        </header>

        <div className="content">
        {
          message !=='' && <p className="message text-danger">{message}</p>
        }
          <table className="table">
            <thead>
              <tr>
                <th>Sr</th>
                <th>Text</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {
                preText.map(item => {
                return (
                  <tr key={item}>
                    <th scope="row">1</th>
                    <td>{item}</td>
                    <td className="text-right">
                      <button onClick={(e)=> this.remText(item)} type="button" className="btn btn-primary btn-sm">Remove</button>
                    </td>
                  </tr>
                );
              })
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
