import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { RootStackParamList } from "../navigation";
import { FlatList } from "react-native-gesture-handler";

type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, "Overview">;

export default function Overview() {
	const navigation = useNavigation<OverviewScreenNavigationProps>();
  	
		return (
			<View style={styles.container}>
				<View style={styles.containerInput}>
					<SimpleLineIcons name="menu" size={24} color="black" />
					<TextInput
						placeholder="Busca en el correo electrónico"
						style={styles.inputTitle}
					/>
					<FontAwesome name="user-circle" size={24} color="black" />
				</View>
				<Text style={styles.titleRecieved}>RECIBIDOS</Text>
				<View style={styles.containerEmail}>

					<FontAwesome name="user-circle" size={45} color="black" style={styles.userAvatar} />
					
					
					<View style={styles.infoEmail}>
						<Text style={styles.emailSender}>Nome</Text>
						<Text style={styles.emailSubject}>Assunto</Text>
						<Text style={styles.emailBody}>Corpo</Text>
					</View>
					<Text style={styles.hour}>00:00</Text>
				</View>
			</View>
		);
	
}


const styles = StyleSheet.create({
	"container": {
		flex: 1,
	},
	"containerInput": {
		flexDirection: "row",
		justifyContent: "space-around",
		borderWidth: 1,
		borderRadius: 8,
		padding: 10,
		gap: 8,
		marginBottom: 20,
		borderColor: "#ADB0CD",
		margin: 20,
	},
	"inputTitle": {
		flex: 1,
		marginHorizontal: 10,
	},
	"titleRecieved": {
		fontSize: 16,
		fontWeight: "400",
		marginHorizontal: 20,
		marginBottom: 10,
	},
	"containerEmail": {
		flexDirection: "row",
		padding: 10,
		gap: 8,
		alignItems: "center",
		justifyContent: "space-between",
	},
	"infoEmail": {
		padding: 10,
	},
	"emailSender": {
		fontSize: 18,
		fontWeight: "bold",
	},
	"emailSubject": {
		fontSize: 16,
	},
	"emailBody": {
		fontSize: 14,
	},
	"userAvatar": {
		padding: 10,
	},
});
