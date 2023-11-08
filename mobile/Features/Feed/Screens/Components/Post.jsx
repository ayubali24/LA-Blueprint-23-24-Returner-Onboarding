import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

export default function Post({ body, username }) {
  return (
    <View>
      <Text>{username}</Text>
      <Text>{body}</Text>
    </View>
  );
}

Post.propTypes = {
  username: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
