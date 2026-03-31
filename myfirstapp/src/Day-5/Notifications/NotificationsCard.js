import React, { Component } from "react";

class NotificationCard extends Component {
  render() {
    return (
    <div>
        <h1>NotificationCard</h1>
        <h4>{this.props.Name} has {this.props.Type} a Post</h4>
    </div>);
  }
}

export default NotificationCard;
