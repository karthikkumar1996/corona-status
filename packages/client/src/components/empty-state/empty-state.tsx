import React from 'react';
import Emoji from '../emoji/emoji';
import Text from '@chakra-ui/core/dist/Text';
import Box from '@chakra-ui/core/dist/Box';

export default function EmptyState() {
  return (
    <Box>
      <Text fontSize="6xl">
        <Emoji emoji="👆" ariaLabel="up" />
      </Text>
      <Text fontSize="2xl" fontWeight="light">
        search your country to view the status
      </Text>
    </Box>
  );
}
