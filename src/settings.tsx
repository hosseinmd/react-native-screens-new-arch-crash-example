/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image as RNImage,
  FlatList,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Image = () => (
  <RNImage
    style={{width: 200, height: 200}}
    source={{
      uri: 'https://unsplash.it/400/400?image=2',
      headers: {Authorization: 'someAuthToken'},
      // priority: FastImage.priority.normal,
    }}
    // resizeMode={FastImage.resizeMode.contain}
  />
);

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Image />
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function Settings(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <FlatList
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
        removeClippedSubviews
        windowSize={5}
        data={Array.from({length: 100}).fill(0)}
        renderItem={({index}) =>
          index === 10 ? (
            <>
              <ChildFlatlist />
            </>
          ) : (
            <Section title="Step One">
              Scroll down at list to 30 this is item:{index}
            </Section>
          )
        }
      />
    </SafeAreaView>
  );
}

function ChildFlatlist(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <FlatList
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}
      removeClippedSubviews
      windowSize={5}
      data={Array.from({length: 100}).fill(0)}
      renderItem={({index}) => (
        <Section title="Step tow">
          Edit <Text style={styles.highlight}>App.tsx</Text> to change this
          screen and then come back to see your edits. {index}
        </Section>
      )}
    />
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Settings;
