import React from 'react';

import { FiArrowRight } from 'react-icons/fi';

import { Button, Text } from './styles';

export default function ButtonDefault(props) {
  return (
    <Button>
      <Text>{props.title}</Text>
      <FiArrowRight size={32} />
    </Button>
  );
}