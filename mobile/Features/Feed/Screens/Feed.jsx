import axios from 'axios';
import {
  Button, Text, View,
} from 'react-native';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Post from './Components/Post';
import NewPostForm from './Components/NewPostForm';

export default function Feed({ navigation }) {
  const [posts, setPosts] = useState([
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
  ]);

  const getAllPosts = async () => {
    const res = await axios.get(`${process.env.EXPO_PUBLIC_SERVER_URL}/posts/getAllPosts`);
    setPosts(res.data);
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  const addNewPost = async (newPost) => {
    const res = await axios.post(`${process.env.EXPO_PUBLIC_SERVER_URL}/posts/create`, newPost);
    const updatedPosts = [...posts];
    updatedPosts.push(res.data);
    setPosts(updatedPosts);
  };

  const navigateToLanding = () => {
    navigation.navigate('Landing');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Posts</Text>
      <NewPostForm addNewPost={addNewPost} />
      {posts.map((post) => (
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
