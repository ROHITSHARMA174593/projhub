// app/page.tsx
import Layout  from './(root)/layout';
import {BackgroundBoxesDemo} from './(root)/page';

export default function Page() {
  return <BackgroundBoxesDemo />;
}

export const metadata = { // i know about it
  title: 'Home',
};

export { Layout as layout };