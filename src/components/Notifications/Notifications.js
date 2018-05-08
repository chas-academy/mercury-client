import React from 'react';
import {connect} from 'react-redux';

import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Notifications extends React.Component {
	createNotification = (type, body) => {
		return () => {
			switch (type) {
				case 'info':
					NotificationManager.info(body);
					break;
				case 'success':
					NotificationManager.success('Success message', body);
					break;
				case 'warning':
					NotificationManager.warning('Warning message', body, 3000);
					break;
				case 'error':
					NotificationManager.error('Error message', body, 5000, () => {
						alert('callback');
					});
					break;
			}
		};
	};

	render() {
		return (
			<div>
				<NotificationContainer />
			</div>
		);
	}
}

const mapStateProps = state => ({
	notification: state.notification
});

export default connect(mapStateProps)(Notifications);