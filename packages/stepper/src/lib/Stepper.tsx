import { useRef, useState, useEffect } from 'react';
import MuiStepper, { StepperProps as MuiStepperProps } from '@mui/material/Stepper';
import { IconButton } from '@availity/mui-button';
import { NavigatePreviousIcon, NavigateNextIcon } from '@availity/mui-icon';
import { Grid } from '@availity/mui-layout';
import { styled } from '@mui/material/styles';

export type StepperProps = {
  scrollButtons?: boolean;
} & Omit<MuiStepperProps, 'alternativeLabel' | 'elevation'>;

const HiddenConnectorStepper = styled(MuiStepper, {
  name: 'MuiStepper',
  slot: 'AvHideConnector',
  overridesResolver: (props, styles) => styles.avHideConnector,
})({
  '.MuiStepLabel-root::before, .MuiStepLabel-root::after, .MuiStepConnector-root': {
    display: 'none'
  }
});

export const Stepper = ({ children, connector, orientation, scrollButtons, ...rest }: StepperProps): React.JSX.Element => {
  const alternativeLabel = orientation !== 'vertical';
  const Stepper = connector === null ? HiddenConnectorStepper : MuiStepper;

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

  const showScrollButtons = scrollButtons && orientation !== 'vertical';

  const ScrollIconContainer = styled('div')({
    width: '50px',
    flexShrink: 0,
    paddingTop: '15px',
  });

  return showScrollButtons ? (
    <Grid container direction="row" justifyContent="space-between" wrap="nowrap">
      <ScrollIconContainer style={{ paddingRight: '8px' }}>
        {showLeftButton && (
          <IconButton
            title="Previous"
            variant="outlined"
            onClick={() => stepperRef.current?.scrollTo({ left: 0, behavior: 'smooth' })}
          >
            <NavigatePreviousIcon fontSize="xsmall" />
          </IconButton>
        )}
      </ScrollIconContainer>

      <Stepper
        aria-label="multi-step process"
        role="region"
        {...rest}
        connector={connector}
        orientation={orientation}
        alternativeLabel={alternativeLabel}
        ref={stepperRef}
        children={children}
        tabIndex={0}
      />

      <ScrollIconContainer style={{ paddingLeft: '8px' }}>
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
      </ScrollIconContainer>
    </Grid>
  ) : (
    <Stepper
      aria-label="multi-step process"
      role="region"
      {...rest}
      connector={connector}
      orientation={orientation}
      alternativeLabel={alternativeLabel}
      ref={stepperRef}
      children={children}
    />
  );
};
