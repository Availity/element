import React, { useCallback, useEffect, useRef, useState, isValidElement } from 'react';
import type { KeyboardEvent, KeyboardEventHandler, ReactNode } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';

const Loader = () => {
  return <CircularProgress aria-label="Loading" variant="indeterminate" />;
};

const Block = styled('div')({
  position: 'relative',
});

const BlockUiContainer = styled('div')({
  position: 'absolute',
  zIndex: 1010,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  height: '100%',
  minHeight: '4.5em',
  cursor: 'wait',
  overflow: 'hidden',
  ':focus': {
    outline: 'none',
  },
});

const BlockUiOverlay = styled('div')({
  width: '100%',
  height: '100%',
  opacity: '0.88',
  filter: 'alpha(opacity=50)',
  backgroundColor: 'white',
});

const BlockUiMessageContainer = styled('div')<{ top?: string | number }>(({ top = '50%' }) => ({
  top,
  position: 'absolute',
  left: 0,
  right: 0,
  textAlign: 'center',
  transform: 'translateY(-50%)',
  zIndex: 10001,
}));

const BlockUiMessage = styled('div')({
  color: '#333',
  background: 'none',
  zIndex: '1011',
});

const ScreenReaderOnly = styled('div')({
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  borderWidth: 0,
});

export type BlockUiProps = {
  /** Set the color of the blocking component. */
  backdropColor?: 'canvas' | 'paper';
  /** Set whether the component should block its children */
  blocking?: boolean;
  /** children to display */
  children?: ReactNode;
  /** CSS class name to pass to component */
  className?: string;
  /** Set whether the blocking component should follow the scroll or stay at a fixed postion */
  keepInView?: boolean;
  /** Loader component to use */
  loader?: React.JSX.Element;
  /** The message to display. Can also be a component. */
  message?: string | ReactNode;
  /** Control if the children are shown when the component is being blocked */
  renderChildren?: boolean;
};

export function BlockUi({
  backdropColor = 'paper',
  blocking,
  children,
  keepInView,
  loader = <Loader />,
  message,
  renderChildren = true,
  ...rest
}: BlockUiProps): React.JSX.Element {
  const [top, setTop] = useState<string | number>('50%');

  const blockerRef = useRef<HTMLDivElement>(null);
  const topFocusRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const messageContainerRef = useRef<HTMLDivElement>(null);

  const handleKeepInView = useCallback(() => {
    if (blocking && keepInView && containerRef.current) {
      const containerBounds = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (containerBounds.top > windowHeight || containerBounds.bottom < 0) return;

      if (containerBounds.top >= 0 && containerBounds.bottom <= windowHeight) {
        if (top !== '50%') {
          setTop('50%');
        }
        return;
      }

      const messageBoundsHeight = messageContainerRef.current
        ? messageContainerRef.current.getBoundingClientRect().height
        : 0;

      let newTop =
        Math.max(
          Math.min(windowHeight, containerBounds.bottom) - Math.max(containerBounds.top, 0),
          messageBoundsHeight
        ) / 2;

      if (containerBounds.top < 0) {
        newTop = Math.min(newTop - containerBounds.top, containerBounds.height - messageBoundsHeight / 2);
      }

      if (top !== newTop) {
        setTop(newTop);
      }
    }
  }, [blocking, keepInView, top]);

  // Add/Remove event listeners with handleKeepInView
  useEffect(() => {
    window.addEventListener('scroll', handleKeepInView);

    return () => {
      window.removeEventListener('scroll', handleKeepInView);
    };
  }, [handleKeepInView]);

  const blockingTab = (event: KeyboardEvent<HTMLDivElement>, withShift = false) => {
    const { key, shiftKey } = event;

    return blocking && key === 'Tab' && shiftKey === withShift;
  };

  const tabbedUpTop: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (blockerRef.current && blockingTab(event)) {
      blockerRef.current.focus();
    }
  };

  const tabbedDownTop: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (blockerRef.current && blockingTab(event)) {
      event.preventDefault();
      blockerRef.current.focus();
    }
  };

  const tabbedUpBottom: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (topFocusRef.current && blockingTab(event, true)) {
      topFocusRef.current.focus();
    }
  };

  const tabbedDownBottom: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (topFocusRef.current && blockingTab(event, true)) {
      event.preventDefault();
      topFocusRef.current.focus();
    }
  };

  // Render children when not blocking or renderChildren is true
  const shouldRenderChildren = !blocking || renderChildren;

  return (
    <Block aria-busy={blocking} {...rest}>
      {blocking ? (
        <ScreenReaderOnly tabIndex={0} onKeyUp={tabbedUpTop} onKeyDown={tabbedDownTop} ref={topFocusRef}>
          {message || 'loading'}
        </ScreenReaderOnly>
      ) : null}
      {shouldRenderChildren ? children : null}
      {blocking ? (
        <BlockUiContainer tabIndex={0} ref={blockerRef} onKeyUp={tabbedUpBottom} onKeyDown={tabbedDownBottom}>
          <BlockUiOverlay ref={containerRef} sx={{backgroundColor: `background.${backdropColor}`}} />
          <BlockUiMessageContainer ref={messageContainerRef} top={keepInView ? top : undefined}>
            <BlockUiMessage>
              {isValidElement(loader) ? <div aria-hidden>{loader}</div> : null}
              {message || <ScreenReaderOnly>loading</ScreenReaderOnly>}
            </BlockUiMessage>
          </BlockUiMessageContainer>
        </BlockUiContainer>
      ) : null}
    </Block>
  );
}
