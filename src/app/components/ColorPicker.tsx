import { ColorPicker, Text } from "@mantine/core";
import { useState } from "react";

interface ColorPickerProps {
  onChangeColor: (color: string) => void;
}

const ColorPickerComponent: React.FC<ColorPickerProps> = ({
  onChangeColor,
}) => {
  const [value, setValue] = useState("rgba(47, 119, 150, 0.7)");

  const handleChange = (color: string) => {
    setValue(color);
    onChangeColor(color);
  };

  return (
    <>
      <ColorPicker format="rgba" value={value} onChange={handleChange} />
      <Text>{value}</Text>
    </>
  );
};

export default ColorPickerComponent;
