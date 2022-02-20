import {
  Banner,
  BoostAgencies,
  CallToAction,
  CustomerSupport,
  Feature,
  ProjectTabs,
  Testimonials,
  TopTabs,
  VideoOne
} from "../components/home";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <section id="HEADER">
          <Banner />
        </section>
        <section id="TABS">
          <TopTabs />
        </section>
        <section id="PROJECT_TABS">
          <ProjectTabs />
        </section>
        <section id="BOOST_AGENCIES">
          <BoostAgencies />
        </section>
        <section id="VIDEO_ON">
          <VideoOne />
        </section>
        <section id="TESTIMONIALS">
          <Testimonials />
        </section>
        <section id="CUSTOMER_SUPPORT">
          <CustomerSupport />
        </section>
        <section id="MOST_CHOICE">
          <Feature />
        </section>
        <section id="CALL_ACTION">
          <CallToAction />
        </section>
      </Layout>
    </>
  );
}
