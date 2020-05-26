import React from 'react';

import { Button } from './styles';

export default function ButtonDefault(props) {
  return (
    <Button>{props.title}</Button>
  );
}