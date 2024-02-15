import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const bottomSheetStyles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  toggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 32,
  },
  toggleButton: {
    padding: 8,
    borderRadius: 32,
    paddingHorizontal: 30,
  },
  toggleActive: {
    backgroundColor: Colors.purple,
  },
  toggleInactive: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.purple,
  },
  toggleButtonText: {
    fontWeight: 'bold',
  },
  activeText: {
    color: '#fff',
  },
  inactiveText: {
    color: Colors.purple,
  },
  button: {
    backgroundColor: Colors.purple,
    padding: 16,
    margin: 16,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  subheader: {
    fontSize: 16,
    fontWeight: '600',
    margin: 16,
  },
  item: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderColor: Colors.grey,
    borderWidth: 1,
  },
});