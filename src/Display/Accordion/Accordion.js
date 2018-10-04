/* @flow */

import React from 'react';
import {
  AccordionContainer,
} from '../../Style/Display/AccordionStyle';

const Accordion = (props: Props) => {
  const {
    children,
    className,
  } = props;

  return (
    <AccordionContainer className={className}>
      {children}
    </AccordionContainer>
  );
};

type Props = {
  children: React$Node,
  className: string,
};

export default Accordion;