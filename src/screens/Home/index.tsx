import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export function Home() {
  const participants = [
    'Marcelo',
    'Flavia',
    'Didio',
    'Giovanna',
    'Luis',
    'Dri',
    'Gabriel',
    'Manu',
    'Aramis',
    'Diane',
  ];

  function handleParticipantAdd() {
    console.log('Participant added!');
  }

  function handleParticipanRemove() {
    console.log('Participant removed!');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Event Name</Text>
      <Text style={styles.eventDate}>Tuesday, 27th August 2024</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Participant's name"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {participants.map((participant) => (
          <Participant
            key={participant}
            name={participant}
            onRemove={handleParticipanRemove}
          />
        ))}
      </ScrollView>
    </View>
  );
}
