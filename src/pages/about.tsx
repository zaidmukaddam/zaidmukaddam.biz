// components
import Layout from '~components/layouts/base';
import { Intro, Process, Story } from '~components/about/index';

export default function AboutPage() {
  return (
    <Layout title='About | Zaid Mukaddam'>
      <Intro />
      <Process />
      <Story />
    </Layout>
  );
}
