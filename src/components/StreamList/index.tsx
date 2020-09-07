import React from 'react';
import { Text } from 'react-native';
import  streamThumbnail from '../../images/stream_thumbnail.jpg';

import {
  List,
  StreamContainer,
  StreamRow,
  StreamThumbnail,
  StreamColumn,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  TagRow,
  TagView,
  TagText,
  StreamDescription,
  StreamCategory
} from './styles';

const StreamList: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>jonathan_alves</StreamUsername>
          </StreamHeader>
          <StreamDescription numberOfLines={1}>
            Front-end com React.js, React.Native and Node
          </StreamDescription>

          <StreamCategory>
            Tecnology
          </StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>Portugues</TagText>
          </TagView>
          <TagView>
            <TagText>Web Development</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  )

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
