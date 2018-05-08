import React, { Component } from 'react';

import { NotificationStack } from 'react-notification';
import { connect } from 'net';

class Notification extends Component {

	constructor() {
		super();
		this.state = {
			notifications: OrderedSet()
		};
	}

	addNotification() {
		const newCount = count + 1;
		return this.setState({
			notifications: this.state.notifications.add({
				message: `Notification ipsum...`,
				key: 'some UID',
				action: 'Dismiss',
				onClick: (notification, deactivate) => {
					deactivate();
					this.removeNotification('some UID');
				},
			})
		});
	}

	removeNotification(count) {
		this.setState({
			notifications: this.state.notifications.filter(n => n.key !== count)
		})
	}

	render() {
		return (
			<NotificationStack
				notifications={this.state.notifications.toArray()}
				onDismiss={notification => this.setState({
					notifications: this.state.notifications.delete(notification)
				})}
			/>
		);
	}

}

const mapStateProps = state => ({
	notifications: state.notifications
});

export default connect(mapStateProps)(Notification);