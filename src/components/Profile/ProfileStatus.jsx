import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
    // editMode: true,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  // activateEditMode() {
  //   this.setState({
  //     editMode: true,
  //   });
  // }
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };
  // deactivateEditMode() {
  //   this.setState({
  //     editMode: false,
  //   });
  // }
  onStatusChange = e => {
    this.setState({ status: e.currentTarget.value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            {/* <span onDoubleClick={this.activateEditMode.bind(this)}> */}
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || "---"}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              autoFocus={true}
              onChange={this.onStatusChange}
              // onBlur={this.deactivateEditMode.bind(this)}
              onBlur={this.deactivateEditMode}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
