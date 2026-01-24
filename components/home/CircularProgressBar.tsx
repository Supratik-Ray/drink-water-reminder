import { Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

type Props = {
  current: number;
  goal: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  unit?: string;

  valueTextSize?: number; // 👈 main number
  unitTextSize?: number; // 👈 secondary text
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
  const progress = Math.min((current / goal) * 100, 100);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeOffset = circumference - (progress / 100) * circumference;

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

        {/* Progress ring */}
        <Circle
          stroke={color}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeOffset}
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
