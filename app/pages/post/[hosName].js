// pages/post/[imgName].js
import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();
  const { imgName } = router.query;

  return (
    <div>
      <h1>Post: {imgName}</h1>
    </div>
  );
}