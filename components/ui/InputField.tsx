import { getFontFamily } from '@/utils/fontFamily';
import { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TextInputProps,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

interface IInputFieldProps extends TextInputProps {
  className?: string;
  icon?: any;
}

const InputField: React.FC<IInputFieldProps> = ({ className, icon, secureTextEntry, ...props }) => {
  const [isPassword, setIsPassword] = useState(secureTextEntry);

  const toggleSecurityTextEntryHandler = () => {
    setIsPassword(!isPassword);
  };

  return (
    <KeyboardAvoidingView
      className="relative"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className={`flex flex-row justify-start items-center relative rounded-full`}>
          <TextInput
            className={`bg-lightGreen py-3 pl-9 w-full pr-5 rounded-[18px] text-text text-[15px] ${className}`}
            style={{ fontFamily: getFontFamily('regular') }}
            secureTextEntry={isPassword}
            {...props}
          />
          {icon && (
            <View className="absolute right-4 top-1/2">
              <TouchableWithoutFeedback onPress={toggleSecurityTextEntryHandler}>
                {icon}
              </TouchableWithoutFeedback>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
