import { styled, Box } from '@mui/material';

interface OuterWrapperProps {
  ratio: number;
}

export const OuterWrapper = styled(Box)<OuterWrapperProps>(({ ratio }: any) => {
  return {
    position: 'relative',
    width: '100%',
    height: 0,
    paddingBottom: `${(1 / ratio) * 100}%`,
  };
});

export const InnerWrapper = styled(Box)({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});
