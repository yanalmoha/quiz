/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
// import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  // ScrollView,
  // StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  // Image,
  TextInput,
  Switch,
  Pressable,
  Alert,
} from 'react-native';

import {
  Colors,
  // DebugInstructions,
  // Header,
  // LearnMoreLinks,
  // ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {setToken} from './src/shared/utils/helper/storage';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [click, setClick] = useState(false);

  useEffect(() => {
    setUsername('eve.holt@reqres.in');
    setPassword('cityslicka');
  }, []);

  // const Login = () => {
  //   console.log('============================');
  //   console.log('username : ', username, 'password : ', password);
  //   if (username !== '' || password !== '') {
  //     fetch('https://reqres.in/api/login', {
  //       method: 'POST',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         email: username,
  //         password: password,
  //       }),
  //     })
  //       .then(res => {
  //         if(res.status === 200)
  //         {

  //         }
  //         console.log('============================ yanal');
  //         console.log(res);
  //         console.log('============================');
  //       })
  //       .catch(error => {
  //         console.error(error, 'catch ========= yanal');
  //       });
  //   } else {
  //     Alert.alert('Error', 'Please cheack you Info');
  //   }
  // };

  const Login = () => {
    console.log('============================');
    console.log('username : ', username, 'password : ', password);

    //eve.holt@reqres.in
    //cityslicka
    //

    if (username !== '' && password !== '') {
      fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: username,
          password: password,
        }),
      })
        .then(res => {
          console.log('Response Status:', res.status);
          return res.json();
        })
        .then(data => {
          if (data.token) {
            setToken(data.token);
            console.log('Login successful:', data);
          } else {
            console.log('Login failed:', data);
            Alert.alert('Error', 'Invalid username or password');
          }
        })
        .catch(error => {
          console.error('Error during fetch:', error);
          Alert.alert('Error', 'Something went wrong');
        });
    } else {
      Alert.alert('Error', 'Please check your info');
    }
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <Image source={logo} style={styles.image} resizeMode="contain" /> */}
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="EMAIL"
          value={username}
          onChangeText={setUsername}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="PASSWORD"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCorrect={false}
          autoCapitalize="none"
        />
      </View>
      {/* <View style={styles.rememberView}>
        <View style={styles.switch}>
          <Switch
            value={click}
            onValueChange={setClick}
            trackColor={{true: 'green', false: 'gray'}}
          />
          <Text style={styles.rememberText}>Remember Me</Text>
        </View>
        <View>
          <Pressable onPress={() => Alert.alert('Forget Password!')}>
            <Text style={styles.forgetText}>Forgot Password?</Text>
          </Pressable>
        </View>
      </View> */}

      <View style={styles.buttonView}>
        <Pressable
          style={styles.button}
          onPress={
            () => Login()
            // Alert.alert(
            //   'Login Successfuly!',
            //   'see you in my instagram if you have questions : must_ait6',
            // )
          }>
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>
        {/* <Text style={styles.optionsText}>OR LOGIN WITH</Text> */}
      </View>
      {/* 
      <View style={styles.mediaIcons}>
        <Image source={facebook} style={styles.icons} />
        <Image source={tiktok} style={styles.icons} />
        <Image source={linkedin} style={styles.icons} />
      </View> */}

      {/* <Text style={styles.footerText}>
        Don't Have Account?<Text style={styles.signup}> Sign Up</Text>
      </Text> */}
    </SafeAreaView>

    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar
    //     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //     backgroundColor={backgroundStyle.backgroundColor}
    //   />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}>
    //     <Header />
    //     <View
    //       style={{
    //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
    //       }}>
    //       <Section title="Step One">
    //         Edit <Text style={styles.highlight}>App.tsx</Text> to change this
    //         screen and then come back to see your edits.
    //       </Section>
    //       <Section title="See Your Changes">
    //         <ReloadInstructions />
    //       </Section>
    //       <Section title="Debug">
    //         <DebugInstructions />
    //       </Section>
    //       <Section title="Learn More">
    //         Read the docs to discover what to do next:
    //       </Section>
    //       <LearnMoreLinks />
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 70,
  },
  image: {
    height: 160,
    width: 170,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingVertical: 40,
    color: 'red',
  },
  inputView: {
    gap: 15,
    width: '100%',
    paddingHorizontal: 40,
    marginBottom: 5,
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 7,
  },
  rememberView: {
    width: '100%',
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 8,
  },
  switch: {
    flexDirection: 'row',
    gap: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rememberText: {
    fontSize: 13,
  },
  forgetText: {
    fontSize: 11,
    color: 'red',
  },
  button: {
    backgroundColor: 'red',
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonView: {
    width: '100%',
    paddingHorizontal: 50,
    marginTop: 40,
  },
  optionsText: {
    textAlign: 'center',
    paddingVertical: 10,
    color: 'gray',
    fontSize: 13,
    marginBottom: 6,
  },
  mediaIcons: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 23,
  },
  icons: {
    width: 40,
    height: 40,
  },
  footerText: {
    textAlign: 'center',
    color: 'gray',
  },
  signup: {
    color: 'red',
    fontSize: 13,
  },
});

export default App;
