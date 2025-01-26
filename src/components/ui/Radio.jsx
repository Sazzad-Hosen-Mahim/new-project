import { RadioGroup, Radio } from "@heroui/react";

const RadioButton = () => {
  return (
    <RadioGroup orientation="horizontal">
      <Radio value="buenos-aires" className="custom-radio" color="danger">
        7.5mg
      </Radio>
      <Radio value="sydney" className="custom-radio" color="danger">
        10 mg
      </Radio>
    </RadioGroup>
  );
};

export default RadioButton;
