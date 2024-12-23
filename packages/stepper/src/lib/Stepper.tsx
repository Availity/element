import { useRef, useState, useEffect } from 'react';
import MuiStepper, { StepperProps as MuiStepperProps } from '@mui/material/Stepper';
import { IconButton } from '@availity/mui-button';
import { NavigatePreviousIcon, NavigateNextIcon } from '@availity/mui-icon';
import { Grid } from '@availity/mui-layout';

export type StepperProps = {
  scrollButtons?: boolean;
} & Omit<MuiStepperProps, 'alternativeLabel' | 'elevation'>;

export const Stepper = ({ children, orientation, scrollButtons, ...rest }: StepperProps): JSX.Element => {
  const alternativeLabel = orientation !== 'vertical';

  const stepperRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(true);
  const [showRightButton, setShowRightButton] = useState(true);

  useEffect(() => {
    const stepper = stepperRef.current;

    const handleScroll = () => {
      if (stepper) {
        setShowLeftButton(stepper.scrollLeft > 0);

        // Check if scrolled to right
        const isRight = Math.abs(stepper.scrollWidth - stepper.clientWidth - stepper.scrollLeft) <= 1; // Using 1px threshold for floating point precision
        setShowRightButton(!isRight);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      handleScroll();
    });

    if (stepper) {
      stepper.addEventListener('scroll', handleScroll);
      resizeObserver.observe(stepper);
      // Initial check
      handleScroll();
    }

    return () => {
      if (stepper) {
        stepper.removeEventListener('scroll', handleScroll);
        resizeObserver.disconnect();
      }
    };
  }, []);

  return (
    <Grid container direction="row" justifyContent="space-between" wrap="nowrap" marginTop="16px" marginBottom="16px">
      {scrollButtons && (
        <div style={{ width: '50px', marginTop: '-10px', paddingRight: '8px', flexShrink: 0 }}>
          {showLeftButton && (
            <IconButton
              title="Previous"
              variant="outlined"
              onClick={() => stepperRef.current?.scrollTo({ left: 0, behavior: 'smooth' })}
            >
              <NavigatePreviousIcon fontSize="xsmall" />
            </IconButton>
          )}
        </div>
      )}
      <MuiStepper {...rest} orientation={orientation} alternativeLabel={alternativeLabel} ref={stepperRef}>
        {children}
      </MuiStepper>
      {scrollButtons && (
        <div style={{ width: '50px', marginTop: '-10px', paddingLeft: '8px', flexShrink: 0 }}>
          {showRightButton && (
            <IconButton
              title="Next"
              variant="outlined"
              onClick={() => {
                stepperRef.current?.scrollTo({
                  left: stepperRef.current.scrollWidth - stepperRef.current.clientWidth,
                  behavior: 'smooth',
                });
              }}
            >
              <NavigateNextIcon fontSize="xsmall" />
            </IconButton>
          )}
        </div>
      )}
    </Grid>
  );
};
