import React from 'react';

import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Notifications extends React.Component {
	createNotification = (type) => {
		return () => {
			switch (type) {
				case 'info':
					NotificationManager.info('Info message');
					break;
				case 'success':
					NotificationManager.success('Success message', '???');
					break;
				case 'warning':
					NotificationManager.warning('Warning message', '???', 3000);
					break;
				case 'error':
					NotificationManager.error('Error message', '???', 5000, () => {
						alert('callback');
					});
					break;
			}
		};
	};

	componentDidUpdate() {
		console.log(this.props)
		this.createNotification('info')
	}

	render() {
		return (
			<div>
			<button className='btn btn-info'
			  onClick={this.createNotification('info')}>Info
			</button>
			<hr/>
			<button className='btn btn-success'
			  onClick={this.createNotification('success')}>Success
			</button>
			<hr/>
			<button className='btn btn-warning'
			  onClick={this.createNotification('warning')}>Warning
			</button>
			<hr/>
			<button className='btn btn-danger'
			  onClick={this.createNotification('error')}>Error
			</button>
	
			<NotificationContainer/>
		  </div>
		);
	}
}

export default Notifications;