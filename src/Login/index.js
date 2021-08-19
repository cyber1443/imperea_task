import React from 'react';
import {Text, StyleSheet, View, StatusBar, Image} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {typography, colors} from '../Theme';
import Button from './components/Button';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {strings} from '../localization';
import {useDispatch} from 'react-redux';
import {updateAuth} from './state/reducer';

const Login = () => {
  const dispatch = useDispatch();

  const login = () => {
    dispatch(updateAuth('Completed'));
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar
        backgroundColor={colors.white.default}
        barStyle="dark-content"
      />
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require('../assets/logo_orange.png')}
      />
      <View style={styles.buttonsContainer}>
        <Button
          onPress={login}
          text={strings.google_login_title}
          IconComponent={() => (
            <FontAwesome name="google" size={20} color={colors.white.default} />
          )}
          containerStyle={styles.googleButtonContainer}
          textStyle={styles.googleButtonText}
        />
        <Button
          onPress={login}
          text={strings.sms_login_title}
          IconComponent={() => (
            <FontAwesome5
              name="mobile-alt"
              size={20}
              color={colors.gray.dark}
            />
          )}
          containerStyle={styles.smsButton}
        />
        <Button
          onPress={login}
          text={strings.email_login_title}
          IconComponent={() => (
            <FontAwesome name="envelope-o" size={20} color={colors.gray.dark} />
          )}
        />
        <Text style={styles.registerText}>{strings.register_via_email}</Text>
        <Text style={styles.termsOfUsePart1Text}>
          {strings.terms_of_use_part1}
          <Text style={styles.termsOfUsePart2Text}>
            {strings.terms_of_use_part2}
          </Text>
        </Text>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white.default,
    justifyContent: 'center',
    paddingBottom: 20,
  },
  logo: {
    flex: 0.52,
    alignSelf: 'center',
    maxWidth: 200,
  },
  buttonsContainer: {
    flex: 0.48,
    backgroundColor: colors.white.default,
    marginHorizontal: 20,
    padding: 20,
    elevation: 4,
    borderRadius: 2,
  },
  smsButton: {
    marginVertical: 20,
  },
  googleButtonContainer: {
    backgroundColor: colors.red.default,
    borderColor: colors.red.default,
  },
  googleButtonText: {
    color: colors.white.default,
  },
  registerText: {
    ...typography.heading5,
    textAlign: 'center',
    marginTop: 50,
    textDecorationLine: 'underline',
    fontFamily: 'AvenirLTProMedium',
  },
  termsOfUsePart1Text: {
    ...typography.heading6,
    textAlign: 'center',
    marginTop: 20,
    fontSize: 6,
    fontFamily: 'AvenirLTProMedium',
  },
  termsOfUsePart2Text: {
    textDecorationLine: 'underline',
  },
});

export default Login;
