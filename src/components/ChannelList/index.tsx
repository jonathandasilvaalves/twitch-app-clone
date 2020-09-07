import React from 'react';
import { Text } from 'react-native';

import { 
  List,
  ChannelContainer,
  LeftSide,
  Avatar,
  Column,
  Username,
  Info,
  RightSide,
  WhiteCircle
} from './styles';

const ChannelList: React.FC = () => {
  const ChannelItem = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar />
        <Column>
          <Username>Jonathan Teste</Username>
          <Info>36 news Videos</Info>
        </Column>
      </LeftSide>

      <RightSide>
        <WhiteCircle />
      </RightSide>
    </ChannelContainer>
  )

  return (
    <List>
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
    </List>
  );
};

export default ChannelList;