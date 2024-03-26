import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


import { RootStackParamList } from '../navigation';
import { FlatList } from 'react-native-gesture-handler';

type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Overview'>;

export default function Overview() {
  const navigation = useNavigation<OverviewScreenNavigationProps>();

  const data = [
    {
      attachments: true,
      avatar: 'https://i.pravatar.cc/200',
      id: 1,
      preview: "What's the progress on that task?",
      sender: 'Ralph Edwards',
      subject: 'The results to our user testing',
      time: '02:02 am',
    },
    {
      attachments: false,
      avatar: 'https://i.pravatar.cc/300',
      id: 2,
      preview: "Yeah! You're right.",
      sender: 'Eleanor Pena',
      subject: 'Some notes',
      time: '05:51 am',
    },
    {
      attachments: false,
      avatar: 'https://i.pravatar.cc/400',
      id: 3,
      preview: "What's the progress on that task?",
      sender: 'Leslie Alexander',
      subject: 'Your account with us',
      time: '11:27 pm',
    },
    {
      attachments: true,
      avatar: 'https://i.pravatar.cc/500',
      id: 4,
      preview: "So, what's your plan this weekend?",
      sender: 'Esther Howard',
      subject: 'Welcome to our mailing list',
      time: '11:27 pm',
    },
    {
      attachments: true,
      avatar: 'https://i.pravatar.cc/600',
      id: 5,
      preview: 'I hope it goes well.',
      sender: 'Jenny Wilson',
      subject: 'The results to our user testing',
      time: '04:02 am',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.appTitle}>
        <Image source={require('../../assets/paper-plane.png')} style={styles.appLogo} />
        <Text style={styles.appTitleText}>e-mail</Text>
      </View>

      <View style={styles.containerInput}>
        <SimpleLineIcons name="menu" size={24} color="black" style={styles.menuIcon} />
        <TextInput placeholder="Search in the e-mail" style={styles.inputTitle} />
        <Image source={{ uri: 'https://i.pravatar.cc/700' }} style={styles.loggedUserAvatar} />
      </View>
      <Text style={styles.titleRecieved}>RECIEVED</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.containerEmail}>
            <Image source={{ uri: item.avatar }} style={styles.userAvatar} />
            <View style={styles.emailContent}>
              <Text style={styles.emailSender}>{item.sender}</Text>
              <Text style={styles.emailSubject}>{item.subject}</Text>
              <Text style={styles.emailBody}>{item.preview}</Text>
              {item.attachments ? (
                <View style={styles.emailAttachment}>
                  <Entypo name="attachment" size={24} color="black" />
                  <Text style={styles.emailAttachmentText}>Anexo</Text>
                </View>
              ) : null}
            </View>
            <Text style={styles.emailTime}>{item.time}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 52,
    backgroundColor: '#fff',
  },
  appLogo: {
    width: 40,
    height: 40,
    alignSelf: 'center',
    marginVertical: 20,
  },
  appTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -20,
  },
  appTitleText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 8,
  },
  containerInput: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    gap: 8,
    marginBottom: 20,
    borderColor: '#ADB0CD',
    margin: 20,
  },
  menuIcon: {
    marginTop: 7,
    marginStart: 10,
    marginEnd: 10,
  },
  inputTitle: {
    flex: 1,
    fontSize: 16,
  },
  loggedUserAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
  titleRecieved: {
    fontSize: 16,
    fontWeight: '400',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  containerEmail: {
    flexDirection: 'row',
    padding: 10,
    gap: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  emailContent: {
    padding: 10,
    flex: 1,
  },
  emailSender: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  emailSubject: {
    fontSize: 16,
  },
  emailBody: {
    fontSize: 14,
  },
  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginStart: 5,
  },
  emailTime: {
    fontSize: 14,
  },
});
