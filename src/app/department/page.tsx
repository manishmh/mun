'use client'

import DepartmentSecContainer from "@/components/department/DepartmentSecContainer";
import SecContainer from "@/components/department/SecContainer";
import React, { useState } from "react";
import Image from "next/image";
import { teamOne } from "./teamOne";
import { teamThree } from "./teamThree";
import { teamTwo } from "./teamTwo";

const teams = [
  { label: 'Team 1', value: 'team1' },
  { label: 'Team 2', value: 'team2' },
  { label: 'Team 3', value: 'team3' },
];

type teamType = {
  team1: boolean;
  team2: boolean;
  team3: boolean
}

const Department = () => {
  const [selectTeam, setSelectTeam] = useState<teamType>({
    team1: true,
    team2: false,
    team3: false,
  })
  console.log('select', selectTeam)
  const hanldeSelectTeam = (newTeam: keyof teamType) => {
    const newSelectTeam = {
      team1: false,
      team2: false,
      team3: false,
    }
    newSelectTeam[newTeam] = true;

    setSelectTeam(newSelectTeam)
  }
  return (
  <>
  <main className="bg-EventBackground min-h-screen">
    <Image
      src="/hero/GroupTop.png" 
      alt="hero vector"
      width={1920}
      height={400}
      className="absolute"
    ></Image>
    <div className="flex flex-col gap-12 w-[80vw] max-w-[1240px] mx-auto py-24">
      <div className="flex gap-5 justify-center flex-wrap mx-4 ">
        <DepartmentSecContainer 
          imgSource="/roy.png"
          name="Shubhadittya Roy"
          position="DEPUTY SECRETARY GENERAL"
        />
        <DepartmentSecContainer 
          imgSource="https://s3-alpha-sig.figma.com/img/f3db/d90e/513c1cdedcc6cfe0f67c4588afe1f734?Expires=1694390400&Signature=YNc84f3geufXsYtQlHyaWJBIZw0Vs1oBaTXaC231p0R0TpMKccn2dWhhDzkl7Z43iZYtHrWXV8bwIUtZxpCZTjS5tVAqHEhZqOJfKCvYSK4xpjuvrBTZvrybrTh5wLQBwbvPINgy~oCJMFA6Z0KqtchYhSc31hAoNdh4L1scate6n1u0y-F6PkxqXy6WxpIDT1QllrZldRty60eDOudtB8qhaxsYZa1xIS3tVFy4ZH-0bvmUgprnV7s8biP~TEP-4DwZ~XAk6yyDG6qADA-ZcS~7w-O4XL71kwcZ1~xCMw1DXPlneHWpc~paFYKjyaVfMbF2i2RLmKEH48LuzzXGNQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          name="Ayush  K Srivastav"
          position="Director General"
        />
        <DepartmentSecContainer 
          imgSource="https://s3-alpha-sig.figma.com/img/323c/0f23/b984851a6787994d76dc8d7c10116f2a?Expires=1694390400&Signature=HA6DysO1xL9dwvIalbV3MmDF-EhXb4vrMiGQt4BHyJ62GujowphlqEI7jEEAv6NPynEegKjYzlm4ALt3nDTtB4RiMS2d1Xog0z5AORGKPJ6tr0bejJUfn0YbVgQhW-T~k1TmeTakBy7YOYZWJgxgeC9jpJShL2aHzudUwqeKxMAz6KGg~T7IQG4EGRqJnVY9ohbLriaK7v5U6USTqqQoH1Gi2DpDQ3qwbzc7R0Gsz3h-m4tlZvwzPHnvnk2zNE0T9V7w1ASMWiXVfe~XmDQXXS86NUvxmYyKZi3aKN1qjXf067eR7MQiggIIunt3gR5I8wRUCKYNuXjZoNmN~3S8Tw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          name="Kshitij Singh"
          position="SECRETARY-GENERAL"
        />
        <DepartmentSecContainer 
          imgSource="https://s3-alpha-sig.figma.com/img/73b9/cbe7/8a0e787b3aefffd6fa94bf6aaeb52dc2?Expires=1694390400&Signature=TLsJC4oRF6y7hRlkiMrqtZYLb7zxIKlWSRBMqVz~9OiYbfyozIcPM5B5urUFwDDhH2-UELCFLhUS0Uy901a3u5losmeayZKxQO7X13H66KlVIHvEIn7WDw~BOWo2j-rhLb6laEXgxdsueGPRY4QJJSVDlfTsk-I3zgPzHpQ9Sb9LkA7Q75VItSPUg3MqF92lRNg4G3By3~QNSiajM6LkVR1R-jWBUUvlEZP8pH47Hnc5UgdwuF-BZsYoTNH9t9fmCnhrgiwdoZQTM9wGYHz8UvgQdoJPNEXXMd8SzM0kggdqYb47df9epBGKeTfVB6xTcOFzFZtKJtZcWJE1xzKNEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          name="Satyajeet Das"
          position="DEPUTY SECRETARY GENERAL"
        />
        <DepartmentSecContainer 
          imgSource="https://s3-alpha-sig.figma.com/img/4f48/168e/82e5b0b4323fa227135d1ce8563676bf?Expires=1694390400&Signature=b035k0GKetTGjUrWbLgvKVk6yI1irZc1RaLejHvxnlrjHkmhTfBNviga-S1HXpkX36axObVUEqgfr2jDrVLzF6LHbAIZdDY3Um8WQeB~GQ92o9s5phDeZG3T2NDakQLlgj2lvBR6X-7sqvEbkcudjlMNxYc7vkRhzEy-MeDw9K7jf6S4uQma3v0HFggBBrtCJDtb33Dfe6JVjt1xEp2mVHvVzA~l~h~u2mW4yGr5tf731g~iXiiTeMI~hW128LryaiRNoVJ8OyzUYMl9m-B~nVokqybT2P43WBpBcIjI6Hch9FnRo5PwDTexo~CRekNi0jB7q-n7feIAwiPB5bEKjQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          name="Shivram Krishna"
          position="CHARGE D, AFFAIRS"
        />
      </div>
      <div className="flex md:justify-between gap-8 flex-wrap justify-center items-center mx-8">
        <h1 className="font-semibold text-2xl">MEET THE SECRETARIAT</h1>
        <div className="w-[80vw] md:w-[30vw] min-w-[250px] lg:max-w-[400px]">
          <select
            id="team"
            name="team"
            className="mt-1 block px-3 py-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:border-blue-300 text-gray-500 w-full"
            onChange={(e) => hanldeSelectTeam(e.target.value as keyof teamType)}
            value={Object.keys(selectTeam).find((key) => selectTeam[key as keyof teamType])}
          >
            <option value="" disabled selected>
              Select a team
            </option>
              <option value="team1">
                Team one
              </option>
              <option value="team2">
                Team two 
              </option>
              <option value="team3">
                Team three 
              </option>
          </select>
        </div>
      </div>
    <div className="flex gap-4 justify-center flex-wrap w-full">
      {selectTeam.team1 && (
        <SecContainer teamMembers={teamOne}/>
      )}
      {selectTeam.team2 && (
        <SecContainer teamMembers={teamTwo}/>
      )}
      {selectTeam.team3 && (
        <SecContainer teamMembers={teamThree}/>
      )}
    </div>
    </div>
  </main>
  </>
  )
};

export default Department ;
