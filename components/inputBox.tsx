import {StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {
  Input,
  InputField,
  FormControlError,
  FormControlErrorText,
} from '@gluestack-ui/themed';
import {appColors} from '../constants/colorsContants';
import {Controller} from 'react-hook-form';

export default function InputBox({name, control, rules}: any) {
  return (
    <>
      <Controller
        control={control}
        rules={rules}
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => {
          return (
            <>
              <Input
                style={!error ? styles.inputBox : styles.errorInputBox}
                variant="outline"
                size="md"
                borderRadius="$md"
                height={51}
                isDisabled={false}
                isInvalid={!!error}
                isReadOnly={false}>
                <InputField
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  py="$2"
                  type={name === 'email' ? 'text' : 'password'}
                />
              </Input>
              <FormControlError>
                <FormControlErrorText>{error?.message}</FormControlErrorText>
              </FormControlError>
            </>
          );
        }}
        name={name}
      />
    </>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: Colors.white,
    borderColor: appColors.white100,
  },
  errorInputBox: {
    backgroundColor: Colors.white,
    borderColor: 'red',
  },
});
