import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

export default function Post({ body, username }) {
  return (
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
    </View>
  );
}

Post.propTypes = {
  username: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
