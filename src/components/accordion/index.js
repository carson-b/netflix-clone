/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React, { createContext, useContext, useState } from 'react';
import {
  Container,
  Frame,
  Inner,
  Item,
  Title,
  Header,
  Body,
} from './styles/accordion';

const ToggleContext = createContext();

export default function accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

accordion.Title = function accordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

accordion.Frame = function accordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

accordion.Item = function accordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

accordion.Header = function accordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Header
      onClick={() => setToggleShow((toggleShow) => !toggleShow)}
      {...restProps}
    >
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

accordion.Body = function accordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);
  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};
