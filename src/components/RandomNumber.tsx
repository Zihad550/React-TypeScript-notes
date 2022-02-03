import React from "react";

type RandomNumberType = {
  value: number;
};

// here & operator is used that positiveNumber contains all type of randomNumberType
type PositiveNumber = RandomNumberType & {
  isPositive: boolean;
  // here if you give isPositive value then you can't give isNegative and isZero values;
  isNegative?: never;
  isZero?: never;
};

type NegativeNumber = RandomNumberType & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};

type Zero = RandomNumberType & {
  isZero: boolean;
  isPositive?: never;
  isNegative?: never;
};

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero;

const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      {value} {isPositive && "positive"} {isNegative && "negative"}
    </div>
  );
};

export default RandomNumber;
