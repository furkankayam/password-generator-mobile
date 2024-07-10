import { withExpoSnack } from 'nativewind';
import React, { useState } from 'react';

import { Text, View, TextInput, Button } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText1 = styled(Text);
const StyledText2 = styled(Text);
const StyledInput = styled(TextInput);

const App = () => {
  const [value, setValue] = useState('');

  const passwordGenerate = () => {
    const Charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890123456789012345678901234567890123456789!@#$%&*()_-+=!@#$%&*()_-+=!@#$%&*()_-+=!@#$%&*()_-+=';

    let password = '';

    for (let index = 0; index < 15; index++) {
      const randomIndex = Math.floor(Math.random() * Charset.length);
      password += Charset[randomIndex];
    }

    setValue(password);
  };

  return (
    <StyledView className="flex-1 items-center justify-center gap-10 bg-gray-900">
      <StyledText1 className="font-bold text-xl text-white">
        Password Generator
      </StyledText1>
      <StyledInput
        className="border-2 p-3 text-xl text-center w-[300px] rounded-xl border-red-700 text-white"
        value={value}></StyledInput>
      <StyledText2
        className="text-slate-800 text-[18px] border-2 py-2 px-2 rounded-xl text-slite-900 border-red-700 text-white"
        onPress={() => {
          passwordGenerate();
        }}>
        Generate
      </StyledText2>
    </StyledView>
  );
};

// This demo is using a external compiler that will only work in Expo Snacks.
// You may see flashes of unstyled content, this will not occur under normal use!
// Please see the documentation to setup your application
export default withExpoSnack(App);
