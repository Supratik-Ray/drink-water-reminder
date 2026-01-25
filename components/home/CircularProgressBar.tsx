import React, { useEffect, useRef } from "react";
import { Animated, Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type Props = {
  current: number;
  goal: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  unit?: string;

  valueTextSize?: number;
  unitTextSize?: number;
};

export default function CircularProgress({
  current,
  goal,
  size = 180,
  strokeWidth = 16,
  color = "#22C55E",
  unit = "ml",

  valueTextSize = 24,
  unitTextSize = 14,
}: Props) {
  const progress = Math.min(current / goal, 1);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // Animated value (0 → 1)
  const animatedProgress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedProgress, {
      toValue: progress,
      duration: 600,
      useNativeDriver: false, // 👈 required for SVG props
    }).start();
  }, [progress]);

  const strokeDashoffset = animatedProgress.interpolate({
    inputRange: [0, 1],
    outputRange: [circumference, 0],
  });

  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size}>
        {/* Background ring */}
        <Circle
          stroke="#1E293B"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />

        {/* Animated progress ring */}
        <AnimatedCircle
          stroke={color}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          origin={`${size / 2}, ${size / 2}`}
        />
      </Svg>

      {/* Center content */}
      <View className="absolute inset-0 items-center justify-center">
        <Text
          style={{ fontSize: valueTextSize }}
          className="text-white font-semibold"
        >
          {current} {unit}
        </Text>

        <Text style={{ fontSize: unitTextSize }} className="text-muted">
          / {goal} {unit}
        </Text>
      </View>
    </View>
  );
}
