import {
  Button, Text, View,
} from 'react-native';
import PropTypes from 'prop-types';
import Post from './Components/Post';
import NewPostForm from './Components/NewPostForm';

export default function Feed({ navigation }) {
  const GIVEN_POSTS = [
    {
      _id: 1,
      username: 'James',
      body: 'Mobile development is fun!',
    },
    {
      _id: 2,
      username: 'Sidd',
      body: 'I just finished watching another movie. It was interesting, but kind of boring :(',
    },
    {
      _id: 3,
      username: 'Jerry',
      body: 'I am excited to see everyone become friends!',
    },
  ];

  const navigateToLanding = () => {
    navigation.navigate('Landing');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <NewPostForm />
      <Text>Posts</Text>
      {GIVEN_POSTS.map((post) => (
        <Post id={post._id} body={post.body} username={post.username} />
      ))}
      <Button title="To Landing" onPress={navigateToLanding} />
    </View>
  );
}

Feed.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
