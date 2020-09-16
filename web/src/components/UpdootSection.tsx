import { Flex, IconButton } from '@chakra-ui/core';
import React, { useState } from 'react';
import { PostSnippetFragment, useVoteMutation } from '../generated/graphql';

interface UpdootSectionProps {
  // post: PostsQuery['posts']['posts'][0];
  post: PostSnippetFragment;
}

export const UpdootSection: React.FC<UpdootSectionProps> = ({ post }) => {
  const [loadingState, setLoadingState] = useState<
    'updoot_loading' | 'downdoot-loading' | 'not-loading'
  >('not-loading');
  const [, vote] = useVoteMutation();

  return (
    <Flex direction="column" justifyContent="center" alignItems="center" mr="4">
      <IconButton
        onClick={async () => {
          if (post.voteStatus === 1) {
            return;
          }
          setLoadingState('updoot_loading');
          await vote({ postId: post.id, value: 1 });
          setLoadingState('not-loading');
        }}
        isLoading={loadingState === 'updoot_loading'}
        aria-label="updoot post"
        icon="chevron-up"
        variantColor={post.voteStatus === 1 ? 'green' : undefined}
      />
      {post.points}
      <IconButton
        onClick={async () => {
          if (post.voteStatus === -1) {
            return;
          }
          setLoadingState('downdoot-loading');
          await vote({ postId: post.id, value: -1 });
          setLoadingState('not-loading');
        }}
        isLoading={loadingState === 'downdoot-loading'}
        aria-label="downdoot post"
        icon="chevron-down"
        variantColor={post.voteStatus === -1 ? 'red' : undefined}
      />
    </Flex>
  );
};
