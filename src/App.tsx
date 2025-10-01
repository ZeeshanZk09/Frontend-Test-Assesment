import Ad from './component/Ad';
import Hero from './component/Hero';
import Layout from './component/layout/Layout';
import Reviews from './component/Reviews';
import WhyLove from './component/WhyLove';
import Work from './component/Work';

export default function App() {
  return (
    <Layout>
      <main>
        <Hero />
        <Work />
        <WhyLove />
        <Reviews />
        <Ad />
      </main>
    </Layout>
  );
}
