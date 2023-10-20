import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './styles'

type LottieButtonProps = {
  variant: 'variant1' | 'variant2'; 
  onPress?: () => void;
  style?: object;
};

const animations: Record<string, any> = {
  variant1: require('./animation_whatsapp.json'),
  variant2: require('./animation_call.json'),
};

export const LottieButton: React.FC<LottieButtonProps> = ({
  variant,
  onPress,
  style,
}) => {
  const [animationSrc, setAnimationSrc] = useState<any | null>(null);

  useEffect(() => {
    if (animations[variant]) {
      setAnimationSrc(animations[variant]);
    }
  }, [variant]);

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {animationSrc && (
        <LottieView
          source={animationSrc}
          autoPlay
          loop
          style={[style]}
        />
      )}
    </TouchableOpacity>
  );
};

