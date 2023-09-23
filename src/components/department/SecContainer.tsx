import TeamContainer from "./TeamContainer";

type TeamMember = {
  imgSource: string;
  name: string;
  position: string;
};

type SecContainerProps = {
  teamMembers: TeamMember[];
};

const SecContainer = ({ teamMembers }: SecContainerProps) => {
  return (
    <div className="flex gap-4 justify-center flex-wrap w-full">
      {teamMembers.map((member, index) => (
        <TeamContainer
          key={index}
          imgSource={member.imgSource}
          name={member.name}
          position={member.position}
        />
      ))}
    </div>
  );
};

export default SecContainer;
