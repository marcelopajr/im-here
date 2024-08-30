import { useState } from 'react';
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import moment from 'moment';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        'Invalid name',
        'There is already a participant on the list with this name.'
      );
    }

    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName('');
  }

  function handleParticipanRemove(name: string) {
    Alert.alert('Remove', `Do you like to remove the participant: ${name}?`, [
      {
        text: 'Yes',
        onPress: () =>
          setParticipants((prevState) =>
            prevState.filter((participant) => participant !== name)
          ),
      },
      {
        text: 'No',
        style: 'cancel',
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Front-End Day</Text>
      <Text style={styles.eventDate}>
        {moment().format('dddd, MMMM Do YYYY')}
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Participant's name"
          placeholderTextColor="#6B6B6B"
          value={participantName}
          onChangeText={setParticipantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipanRemove(item)}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.listEmptyText}>No participants yet.</Text>
        }
      />
    </View>
  );
}
