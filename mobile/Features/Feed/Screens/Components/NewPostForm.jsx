import {
  Text, Button, TextInput, View,
} from 'react-native';

export default function NewPostForm() {
  return (
    <>
      <TextInput style={{ borderWidth: 1 }} placeholder="Who is this?" />
      <TextInput style={{ borderWidth: 1 }} placeholder="Make another post" />
      <Button title="Submit" />

    </>

  );
}
