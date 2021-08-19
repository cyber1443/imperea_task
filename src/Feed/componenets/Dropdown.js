import React from 'react';
import {StyleSheet} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {colors, typography} from '../../Theme';

export default ({defaultButtonText, setSelectedCategory, data}) => {
  const onSelectItem = (selectedItem, index) => {
    setSelectedCategory(selectedItem);
  };

  const dropdownIcon = () => (
    <EvilIcons name="chevron-down" color={colors.gray.dark} size={30} />
  );

  return (
    <SelectDropdown
      data={data}
      defaultButtonText={defaultButtonText}
      dropdownStyle={styles.dropdown}
      buttonStyle={styles.button}
      buttonTextStyle={styles.buttonText}
      onSelect={onSelectItem}
      rowTextStyle={styles.rowText}
      rowStyle={styles.row}
      renderDropdownIcon={dropdownIcon}
      buttonTextAfterSelection={(selectedItem, index) => {
        return selectedItem.name;
      }}
      rowTextForSelection={(item, index) => {
        return item.name;
      }}
    />
  );
};

const styles = StyleSheet.create({
  dropdown: {
    marginTop: -25,
  },
  button: {
    height: 34,
    width: 160,
    backgroundColor: colors.white.default,
    borderWidth: 1,
    borderColor: colors.gray.light,
    paddingHorizontal: 0,
    borderRadius: 2,
  },
  buttonText: {
    ...typography.heading5,
    textAlign: 'left',
  },
  rowText: {
    ...typography.heading5,
    textAlign: 'left',
  },
  row: {
    paddingHorizontal: 10,
    borderBottomWidth: 0,
  },
});
