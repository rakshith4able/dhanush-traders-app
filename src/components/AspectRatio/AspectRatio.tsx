import * as React from 'react';
import * as Styles from './AspectRatio.styled';

interface AspectRatioProps {
  children: JSX.Element;
  ratio: number;
}

const AspectRatio = ({ children, ratio }: AspectRatioProps) => (
  <Styles.OuterWrapper ratio={ratio}>
    <Styles.InnerWrapper>{children}</Styles.InnerWrapper>
  </Styles.OuterWrapper>
);
export default AspectRatio;
