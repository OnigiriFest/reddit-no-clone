import { useMeQuery } from '../generated/graphql';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useIsAuth = () => {
  const [{ data, fetching }] = useMeQuery();
  const router = useRouter();

  useEffect(() => {
    if (!data?.me && !fetching) {
      router.replace('/login?next=' + router.pathname);
    }
  }, [fetching, data, router]);
};

export default useIsAuth;
