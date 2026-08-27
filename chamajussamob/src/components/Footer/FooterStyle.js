import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    minHeight: 75,        // <- era height: 75
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#ECEEF1',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 8,
    zIndex: 20,
    elevation: 20,
  },

  footerItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },

  footerIcon: {
    width: 22,
    height: 22,
  },

  footerIconActive: {
    tintColor: '#2F6FED',
  },

  footerLabel: {
    fontSize: 11,
    lineHeight: 14,
    color: '#9AA1AC',
    textAlign: 'center',
  },

  footerLabelActive: {
    color: '#2F6FED',
  },
});