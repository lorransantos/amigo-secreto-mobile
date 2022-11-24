import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import Participant from '../../components/Participant';
import { styles } from './styles';

export default function Home() {
  const [participants, setParticipants] = React.useState<string[]>([]);
  const [value, setOnChange] = React.useState<string>('');

  const handleParicipantAdd = () => {
    if (value.length < 3 || !value) {
      return Alert.alert('Ops...', 'Nome de participante inválido');
    }
    if (participants.includes(value)) {
      return Alert.alert(
        'Participante já cadastrado',
        'O particiante já está no evento'
      );
    }
    setParticipants((prevState) => [...prevState, value]);
    setOnChange('');
  };

  const handleParicipantRemove = (name: string) => {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          setParticipants(participants.filter((item) => item !== name));
          Alert.alert('Deletado com sucesso!');
        },
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Amigo Secreto</Text>
      <Text style={styles.text}>24 de Dezembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#6b6b6b'
          onChangeText={setOnChange}
          value={value}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleParicipantAdd}
        >
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
            onRemove={() => handleParicipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmpyt}>Ninguem chegou no envento ainda</Text>
        )}
      />
    </View>
  );
}

type Participant = string[];
