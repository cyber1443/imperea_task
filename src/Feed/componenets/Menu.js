import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {colors, typography} from '../../Theme';
import MenuItem from './MenuItem';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {strings} from '../../localization';
import SocialButton from './SocialButton';

export default () => {
  const AlertCountComponent = () => (
    <View style={styles.alertComponentContainer}>
      <Text style={styles.alertComponentText}>3</Text>
    </View>
  );

  const UnfinishedComponent = () => (
    <View style={styles.unfisnihedComponentContainer}>
      <Text style={styles.alertComponentText}> {strings.unfinished} </Text>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <MenuItem
          title={strings.my_account}
          IconComponent={() => (
            <FontAwesome name="user-o" size={16} color={colors.gray.dark} />
          )}
        />
        <MenuItem
          title={strings.coupons}
          IconComponent={() => (
            <MaterialCommunityIcons
              name="ticket-outline"
              size={16}
              color={colors.gray.dark}
            />
          )}
        />
        <MenuItem
          title={strings.transactions}
          IconComponent={() => (
            <FontAwesome5
              name="money-check-alt"
              size={13}
              color={colors.gray.dark}
            />
          )}
        />
        <MenuItem
          title={strings.notifications}
          IconComponent={() => (
            <FontAwesome name="bell-o" size={16} color={colors.gray.dark} />
          )}
          RightComponent={AlertCountComponent}
        />
        <MenuItem
          title={strings.survey}
          IconComponent={() => (
            <MaterialCommunityIcons
              name="poll-box-outline"
              size={15}
              color={colors.gray.dark}
            />
          )}
          RightComponent={UnfinishedComponent}
        />
        <MenuItem
          title={strings.about_us}
          IconComponent={() => (
            <FontAwesome5
              name="info-circle"
              size={16}
              color={colors.gray.dark}
            />
          )}
        />
        <MenuItem
          title={strings.settings}
          IconComponent={() => (
            <FontAwesome5 name="cog" size={16} color={colors.gray.dark} />
          )}
        />
        <MenuItem
          title={strings.logout}
          IconComponent={() => (
            <FontAwesome name="sign-out" size={18} color={colors.gray.dark} />
          )}
        />
        <View style={styles.socialContainer}>
          <SocialButton
            title={strings.facebook}
            IconComponent={() => (
              <MaterialIcons
                name="facebook"
                size={25}
                color={colors.facebook}
              />
            )}
          />
          <SocialButton
            title={strings.google}
            IconComponent={() => (
              <FontAwesome name="google" size={25} color={colors.google} />
            )}
          />
          <SocialButton
            title={strings.twitter}
            IconComponent={() => (
              <FontAwesome name="twitter" size={25} color={colors.twitter} />
            )}
          />
          <SocialButton
            title={strings.instagram}
            IconComponent={() => (
              <FontAwesome
                name="instagram"
                size={25}
                color={colors.instagram}
              />
            )}
          />
          <SocialButton
            title={strings.linkedin}
            IconComponent={() => (
              <FontAwesome name="linkedin" size={25} color={colors.linkedin} />
            )}
          />
          <SocialButton
            title={strings.website}
            IconComponent={() => (
              <FontAwesome5 name="link" size={25} color={colors.website} />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    backgroundColor: colors.white.default,
  },
  container: {
    backgroundColor: colors.white.default,
    padding: 23,
  },
  alertComponentContainer: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: colors.red.light,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertComponentText: {
    ...typography.heading6,
    color: colors.white.default,
  },
  unfisnihedComponentContainer: {
    padding: 5,
    backgroundColor: colors.orange.default,
    borderRadius: 1,
  },
  socialContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 130,
  },
});
