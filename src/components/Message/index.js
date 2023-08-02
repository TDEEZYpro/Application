<<<<<<< HEAD
import { View, Text, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { authentication } from '../../firebase/firebase-config';
dayjs.extend(relativeTime);

const Message = ({ message }) => {
  const [isMe, setIsMe] = useState(false);
  const authUser = authentication.currentUser.uid;

  useEffect(() => {
    const isMyMessage =  () => {
     setIsMe(message?.userID === authUser);
    };

    isMyMessage();
  }, [message, authUser]);
console.log({message})
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMe ? 'lightblue' : 'white',
          alignSelf: isMe ? 'flex-end' : 'flex-start',
        },
      ]}
    >
      <Text>{message}</Text>
      <Text style={styles.time}>{dayjs(message.createdAt.toDate()).fromNow(true)}</Text>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    borderRadius: 20,
    maxWidth: '80%',

    // shadows
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  time: {
    color: 'gray',
    alignSelf: 'flex-end',
  },
});
=======
import { View, Text, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { authentication } from '../../firebase/firebase-config';
dayjs.extend(relativeTime);

const Message = ({ message }) => {
  const [isMe, setIsMe] = useState(false);
  const authUser = authentication.currentUser.uid;
  
  useEffect(() => {
    const isMyMessage =  () => {
      if(authentication.currentUser.uid ){
       return setIsMe(true);
     }
     return;
    };

    isMyMessage();
  }, [message, authUser]);

  const valueCount = -1;

  return (
    <View>
      {message[0].Messages.map((msg, index) => {
        const isDifferentID = message[0].Messages[valueCount + 1].userID;
        const isMe = msg.userID === authentication.currentUser.uid;
        return (
          <View
            key={index}
            style={[
              styles.container,
              {
                backgroundColor: isMe ? 'lightblue' : 'white',
                alignSelf: isMe ? 'flex-end' : 'flex-start',
              },
            ]}
          >
            <View style={styles.messageContainer}>
              <Text>{msg.text}</Text>
              <Text style={styles.time}>{dayjs(msg.createdAt).fromNow(true)}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    borderRadius: 20,
    maxWidth: '80%',

    // shadows
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  time: {
    color: 'gray',
    alignSelf: 'flex-end',
  },
});
>>>>>>> 97de0230d9fd02fc4461f9549053bdcc38308256
