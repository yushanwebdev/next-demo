import Image from "next/image";
import Link from "next/link";

export const CastList = ({ cast }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "30px",
      }}
    >
      {cast.map((member) => (
        <Link href="/member/[id]" as={`/member/${member.id}`} key={member.id}>
          <a>
            <div>
              <Image
                src="https://i.pravatar.cc/100"
                width={100}
                height={100}
                alt="Profile"
              />
              <p
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  lineHeight: "1em",
                }}
              >
                {member.name}
              </p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};
