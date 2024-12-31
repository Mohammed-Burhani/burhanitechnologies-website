import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { LargeCaption } from "@/components/textComponents/LargeCaption";
import { LargeHeading } from "@/components/textComponents/LargeHeading";
import { Facebook, Instagram, Whatsapp } from "iconsax-react";
import Image from "next/image";
import React from "react";

const OurTeam = () => {
  return (
    <Container className={"bg-white"}>
      <h4 className="uppercase text-[#6622DC] font-extrabold">Team</h4>
      <div className="flex flex-wrap 2xl:flex-nowrap gap-4 justify-between items-center">
        <LargeHeading>Our Experts</LargeHeading>

        <Body className={"max-w-4xl"}>
          Our success is a result of teamwork and building upon our technical
          expertise and creative style providing a full-service solution to our
          clients.
        </Body>
      </div>

      <div className="flex flex-wrap gap-7 mt-7">
        <TeamCard title="John Doe" role={"Software Developer"} />
        <TeamCard title="John Doe" role={"Software Developer"} />
        <TeamCard title="John Doe" role={"Software Developer"} />
        <TeamCard title="John Doe" role={"Software Developer"} />
        <TeamCard title="John Doe" role={"Software Developer"} />
      </div>
    </Container>
  );
};

export default OurTeam;

const TeamCard = ({ title, role }) => {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <div className="flex flex-col gap-4 absolute bottom-5 right-5">
          <div className="bg-black p-3 rounded-full">
            <Facebook color="white" size={20} />
          </div>
          <div className="bg-black p-3 rounded-full">
            <Instagram color="white" size={20} />
          </div>
          <div className="bg-black p-3 rounded-full">
            <Whatsapp color="white" size={20} />
          </div>
        </div>

        <Image
          alt="Team"
          src={"/About/Team/team1.png"}
          width={500}
          height={500}
          className="w-96 4xl:w-80 h-full mb-4"
        />
      </div>

      <LargeCaption>{title}</LargeCaption>
      <Body>{role}</Body>
    </div>
  );
};
