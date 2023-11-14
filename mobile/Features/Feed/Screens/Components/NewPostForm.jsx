import {
  Button, TextInput,
} from 'react-native';

import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';

export default function NewPostForm({ addNewPost }) {
  const [username, setUsername] = useState('');
  const [body, setBody] = useState('');

  const handleAddPost = () => {
    addNewPost({ username, body });
    setUsername('');
    setBody('');
  };

  useEffect(() => console.log({ username, body }, [username, body]));

  return (
    <>
      <TextInput
        style={{ borderWidth: 1 }}
        placeholder="Who is this?"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={{ borderWidth: 1 }}
        placeholder="Make another post"
        onChangeText={setBody}
        value={body}
      />
      <Button onPress={handleAddPost} title="Submit" />

    </>

  );
}

NewPostForm.propTypes = {
  addNewPost: PropTypes.func.isRequired,
};
