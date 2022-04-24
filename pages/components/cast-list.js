export const CastList = ({ cast }) => {
  return (
    <div>
      {cast.map((member) => (
        <div key={member.id}>{member.name}</div>
      ))}
    </div>
  );
};
