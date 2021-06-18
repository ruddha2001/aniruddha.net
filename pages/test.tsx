import { InferGetServerSidePropsType } from "next";
import Head from "next/head";

type SelfDescription = {
  name: string;
  about: string;
};

export const getServerSideProps = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/self");
    if (res.status !== 200) throw new Error("This is an intentional error");
    const selfDescriptionData: SelfDescription = await res.json();

    return {
      props: {
        selfDescriptionData,
      },
    };
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
      props: {},
    };
  }
};

export default function HomePage({
  selfDescriptionData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {selfDescriptionData && (
        <div>
          Hello. This is a website by {selfDescriptionData.name}, who is a{" "}
          {selfDescriptionData.about}
        </div>
      )}
    </>
  );
}
