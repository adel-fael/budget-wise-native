import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link, Stack } from 'expo-router';
import React from 'react';
import {  View, Text } from 'react-native';

export default function NotFoundScreen() {
  return (
    <React.Fragment>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedView className='flex-1 items-center justify-center p-5'>
        <ThemedText className='text-2xl'>This screen doesn't exist.</ThemedText>
        <Link href="/" className='underline active:text-gray-500 dark:text-gray-200'>
          <Text>Go to home screen!</Text>
        </Link>
      </ThemedView>
    </React.Fragment>
  );
}

