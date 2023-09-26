import { Alert } from "react-native";

export default function errorAlert() {
  Alert.alert('Authentication Failed', 'Please check your credentials and try again.');
}
