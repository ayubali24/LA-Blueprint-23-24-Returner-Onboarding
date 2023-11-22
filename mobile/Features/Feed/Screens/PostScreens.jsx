import { Text, Button, View } from 'react-native';
import PropTypes from 'prop-types';

export default function PostScreen({
  navigation, route,
}) {
  const { body, username, time } = route.params;

  const navigateToFeed = () => {
    navigation.navigate('Feed');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        Username:
        {' '}
        {username}
      </Text>
      <Text>
        Body:
        {' '}
        {body}
      </Text>
      <Text>
        Time posted:
        {' '}
        {time}
      </Text>
      <Button title="To Feed" onPress={navigateToFeed} />
    </View>
  );
}

PostScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      body: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
