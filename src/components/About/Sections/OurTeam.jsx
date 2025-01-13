import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { LargeCaption } from "@/components/textComponents/LargeCaption";
import { LargeHeading } from "@/components/textComponents/LargeHeading";
import { Facebook, Instagram, Whatsapp } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurTeam = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/About/Team/team1.png",
      instagram: "https://instagram.com/sarahjohnson",
      facebook: "https://facebook.com/sarahjohnson",
      whatsapp: "https://wa.me/1234567890",
    },
    {
      name: "Michael Lee",
      role: "CTO",
      image: "/About/Team/team1.png",
      instagram: "https://instagram.com/michaellee",
      facebook: "https://facebook.com/michaellee",
      whatsapp: "https://wa.me/1234567891",
    },
    {
      name: "Emily Davis",
      role: "Lead Designer",
      image: "/About/Team/team1.png",
      instagram: "https://instagram.com/emilydavis",
      facebook: "https://facebook.com/emilydavis",
      whatsapp: "https://wa.me/1234567892",
    },
    {
      name: "James Anderson",
      role: "Senior Developer",
      image: "/About/Team/team1.png",
      instagram: "https://instagram.com/jamesanderson",
      facebook: "https://facebook.com/jamesanderson",
      whatsapp: "https://wa.me/1234567893",
    },
    {
      name: "Sophia Martinez",
      role: "Marketing Manager",
      image: "/About/Team/team1.png",
      instagram: "https://instagram.com/sophiamartinez",
      facebook: "https://facebook.com/sophiamartinez",
      whatsapp: "https://wa.me/1234567894",
    },
    // {
    //   name: "Daniel White",
    //   role: "Project Manager",
    //   image: "/About/Team/team1.png",
    //   instagram: "https://instagram.com/danielwhite",
    //   facebook: "https://facebook.com/danielwhite",
    //   whatsapp: "https://wa.me/1234567895",
    // },
    // {
    //   name: "Olivia Brown",
    //   role: "UX Specialist",
    //   image: "/About/Team/team1.png",
    //   instagram: "https://instagram.com/oliviabrown",
    //   facebook: "https://facebook.com/oliviabrown",
    //   whatsapp: "https://wa.me/1234567896",
    // },
    // {
    //   name: "William Harris",
    //   role: "Backend Developer",
    //   image: "/About/Team/team1.png",
    //   instagram: "https://instagram.com/williamharris",
    //   facebook: "https://facebook.com/williamharris",
    //   whatsapp: "https://wa.me/1234567897",
    // },
    // {
    //   name: "Charlotte Wilson",
    //   role: "Content Strategist",
    //   image: "/About/Team/team1.png",
    //   instagram: "https://instagram.com/charlottewilson",
    //   facebook: "https://facebook.com/charlottewilson",
    //   whatsapp: "https://wa.me/1234567898",
    // },
    // {
    //   name: "Liam Scott",
    //   role: "DevOps Engineer",
    //   image: "/About/Team/team1.png",
    //   instagram: "https://instagram.com/liamscott",
    //   facebook: "https://facebook.com/liamscott",
    //   whatsapp: "https://wa.me/1234567899",
    // },
  ];

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
        {team.map((member, i) => {
          return (
            <TeamCard
              key={i}
              name={member?.name}
              role={member?.role}
              image={member?.image}
              facebook={member?.facebook}
              instagram={member?.instagram}
              whatsapp={member?.whatsapp}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default OurTeam;

const TeamCard = ({ name, role, image, facebook, instagram, whatsapp }) => {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <div className="flex flex-col gap-4 absolute bottom-5 right-5">
          <div className="bg-black p-3 rounded-full">
            <Link href={facebook}>
              <Facebook color="white" size={20} />
            </Link>
          </div>
          <div className="bg-black p-3 rounded-full">
            <Link href={instagram}>
              <Instagram color="white" size={20} />
            </Link>
          </div>
          <div className="bg-black p-3 rounded-full">
            <Link href={whatsapp}>
              <Whatsapp color="white" size={20} />
            </Link>
          </div>
        </div>

        <Image
          alt="Team"
          src={image}
          width={500}
          height={500}
          className="w-96 4xl:w-80 h-full mb-4"
        />
      </div>

      <LargeCaption>{name}</LargeCaption>
      <Body>{role}</Body>
    </div>
  );
};
