import React from 'react';
import { connect } from 'react-redux';

import Notifications from 'react-notification-system-redux';

class NotificationComponent extends React.Component {
  render() {
    const { notifications } = this.props;

    // Optional styling
    const style = {
      NotificationItem: {
        // Override the notification item
        DefaultStyle: {
          // Applied to every notification, regardless of the notification level
          color: 'white',
          border: 0,
          borderRadius: '8px'
        },
        success: {
          // Applied only to the success notification item
          background: 'linear-gradient(to bottom, #43E0C4, #2DCFA8)',
          WebkitBoxShadow: '0 16px 32px -16px #2DCFA8',
          MozBoxShadow: '0 16px 32px -16px #2DCFA8',
          boxShadow: '0 16px 32px -16px #2DCFA8'
        },
        error: {
          // Applied only to the error notification item
          background: 'linear-gradient(to bottom, #FF7A8A, #EB4979)',
          WebkitBoxShadow: '0 16px 32px -16px #EB4979',
          MozBoxShadow: '0 16px 32px -16px #EB4979',
          boxShadow: '0 16px 32px -16px #EB4979'
        },
        warning: {
          background: 'linear-gradient(to bottom, #FF9F69, #F2AF4B)',
          WebkitBoxShadow: '0 16px 32px -16px #F2AF4B',
          MozBoxShadow: '0 16px 32px -16px #F2AF4B',
          boxShadow: '0 16px 32px -16px #F2AF4B'
        }
      },
      Dismiss: {
        DefaultStyle: {
          display: 'none'
        }
      },
      Title: {
        DefaultStyle: {
          color: 'white'
        }
      }
    };

    return <Notifications notifications={notifications} style={style} />;
  }
}

export default connect(state => ({ notifications: state.notifications }))(
  NotificationComponent
);
