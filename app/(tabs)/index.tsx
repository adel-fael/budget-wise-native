import {
  Image,
  StyleSheet,
  Platform,
  Switch,
  TouchableOpacity,
  View,
} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useColorScheme } from 'nativewind';
import { ThemedText } from '@/components/ThemedText';

export default function HomeScreen() {
  const { toggleColorScheme, colorScheme } = useColorScheme();
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <View>
        <ThemedText>{colorScheme}</ThemedText>
        <GestureHandlerRootView>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={colorScheme === 'dark' ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            value={colorScheme === 'dark'}
            onChange={toggleColorScheme}
          />
        </GestureHandlerRootView>
      </View>
      <View>
        <TouchableOpacity onPress={() => toggleColorScheme()}>
          <ThemedText>{colorScheme}</ThemedText>
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <ThemedText className='text-4xl'>Welcome! Adel is the best frontend developer</ThemedText>
        <HelloWave />
      </View>
      <View style={styles.stepContainer}>
        <ThemedText className="themedThemedText-sm">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit{' '}
          <ThemedText className="font-semibold themedThemedText-lg">
            app/(tabs)/index.tsx
          </ThemedText>{' '}
          to see changes. Press{' '}
          <ThemedText className="font-semibold themedThemedText-lg">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </View>
      <View style={styles.stepContainer}>
        <ThemedText className="themedThemedText-sm">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </ThemedText>
      </View>
      <View style={styles.stepContainer}>
        <ThemedText className="themedThemedText-sm">
          Step 3: Get a fresh start
        </ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText className="font-semibold themedThemedText-lg">
            npm run reset-project
          </ThemedText>{' '}
          to get a fresh{' '}
          <ThemedText className="font-semibold themedThemedText-lg">
            app
          </ThemedText>{' '}
          directory. This will move the current{' '}
          <ThemedText className="font-semibold themedThemedText-lg">
            app
          </ThemedText>{' '}
          to{' '}
          <ThemedText className="font-semibold themedThemedText-lg">
            app-example
          </ThemedText>
          .
        </ThemedText>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
