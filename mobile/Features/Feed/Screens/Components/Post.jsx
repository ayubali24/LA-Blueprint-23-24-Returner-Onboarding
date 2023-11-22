import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default function Post({
  body, username, time, onPress,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text>
          Author:
          {' '}
          {username}
        </Text>
        <Text>
          Body:
          {' '}
          {body}
        </Text>
        <Text>
          Time:
          {' '}
          {time}
        </Text>

      </View>

    </TouchableOpacity>

  );
}

Post.propTypes = {
  username: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
