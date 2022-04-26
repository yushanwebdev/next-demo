import Image from "next/image";
import Link from "next/link";

export default function castMember({ castMember }) {
  return (
    <main className="container">
      <h1>{castMember.name}</h1>
      <Image
        src="https://i.pravatar.cc/100"
        width={400}
        height={400}
        alt="Profile"
      />
      <p>{castMember.bio}</p>
      <Link href="/">
        <button>Back to Cast</button>
      </Link>
    </main>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch("https://pixelprowess.com/i/stargazers/data.json");
  const data = await res.json();

  const castMember = data.filter((item) => item.id == context.params.id);

  return {
    props: {
      castMember: castMember[0],
    },
  };
};
