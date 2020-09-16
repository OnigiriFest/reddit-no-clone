import { useRouter } from 'next/router';
import { route } from 'next/dist/next-server/server/router';

export const useGetIntId = () => {
  const router = useRouter();
  const intId =
    typeof router.query.id === 'string' ? parseInt(router.query.id) : -1;

  return intId;
};
