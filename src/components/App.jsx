import { Component } from 'react'
import { nanoid } from 'nanoid'
export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }
  nameId = nanoid()
  contactsId = nanoid()
  addContact = (contact) => {
    this.setState((prev)=>{
      return {
        contacts: [...prev.contacts,contact]
      }
    })
  }
  handleChange = (e) => {
    const {name, value} = e.target
    this.setState ({[name]: value }) 
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e);
    // this.props.onSubmit({name})
    const {name} = this.state;
    this.setState({
      name: ''
      })
      console.log(name);
  }
  render() {
    const {nameId, handleSubmit} = this;
    // const {addContact} = this;
    return (
    <div>     
      <h1>Phonebook</h1> 
      <form onSubmit={handleSubmit}>
        <div >
          <label htmlFor={nameId}>Name</label>
          <input
          onChange={this.handleChange}
          value={this.state.name}
          id ={nameId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          />
          <button>Add contact</button>
        </div>
      </form>
    </div>
    )
  }
}

