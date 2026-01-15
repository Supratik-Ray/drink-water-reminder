import { Image, ImageSourcePropType } from "react-native";

export default function MascotImage({ path }: { path: ImageSourcePropType }) {
  return <Image source={path} className="w-[300px] h-[300px] mb-8" />;
}
