import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPersonList, deletePerson } from "../actions";
import { Link } from "react-router-dom";

class PersonList extends Component {
  componentDidMount() {
    this.props.fetchPersonList();
  }

  handleDeletePerson(id) {
    this.props.deletePerson(id).then(() => {
      this.props.fetchPersonList(); // Refresh the list after deletion
    });
  }

  render() {
    const { persons } = this.props;

    return (
      <div className="container">
        <h2>Person List</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email ID</th>
              <th>Mobile Number</th>
              <th>Date of Birth</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {persons && persons.length > 0 ? (
              persons.map((person) => (
                <tr key={person.id}>
                  <td>{person.name}</td>
                  <td>{person.email_id}</td>
                  <td>{person.mobile_no}</td>
                  <td>{person.date_of_birth}</td>
                  <td>
                    <Link to={`/edit-person/${person.id}`} className="btn btn-warning">
                      Edit
                    </Link>
                    <button
                      onClick={() => this.handleDeletePerson(person.id)}
                      className="btn btn-danger"
                      style={{ marginLeft: "10px" }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No persons available</td>
              </tr>
            )}
          </tbody>
        </table>
        <Link to="/add-person" className="btn btn-primary">
          Add Person
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  persons: state.persons.personList,
});

const mapDispatchToProps = {
  fetchPersonList,
  deletePerson,
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonList);
