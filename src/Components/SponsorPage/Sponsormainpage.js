import React,{useEffect} from "react";
import SponsorHeaderImage from "./SponsorHeaderImage/SponsorHeaderImage";
import SponsorText from "./SponsorText/SponsorText";
import SponsorCards from "./SponsorCards/SponsorCarrdsNew";

export const Sponsormainpage = () => {

  const [kids, setKids] = React.useState([
    {
      name: "Melvin Ortencia",
      image: "./Child/boy4.jpg",
      ageGroup: "4-6",
      age: 5,
      BirthYear: 2015,
      BirthMonth: "November",
      Birthdate: "28th",
      Gender: "Boy",
      WaitForSponsor: 30,
      FamilyIncome: 156,
      Country: "Guatemala",
    },
    {
      name: "Edson Ayubu",
      image: "./Child/boy2.jpg",
      age: 12,
      ageGroup: "10-14",
      BirthYear: 2008,
      BirthMonth: "August",
      Birthdate: "13th",
      Gender: "Boy",
      WaitForSponsor: 300,
      FamilyIncome: 200,
      Country: "Tanzania",
    },
    {
      name: "Austin Malaski",
      image: "./Child/boy3.jpg",
      age: 4,
      ageGroup: "4-6",
      BirthYear: 2016,
      BirthMonth: "Febuary",
      Birthdate: "28th",
      Gender: "Boy",
      WaitForSponsor: 100,
      FamilyIncome: 210,
      Country: "Kosovo",
    },
    {
      name: "Eki Nolava",
      image: "./Child/boy1.jpg",
      age: 5,
      ageGroup: "4-6",
      BirthYear: 2015,
      BirthMonth: "June",
      Birthdate: "10th",
      Gender: "Boy",
      WaitForSponsor: 430,
      FamilyIncome: 150,
      Country: "Indonesia",
    },
    {
      name: "Souraya Paracana",
      image: "./Child/girl1.jpg",
      age: 8,
      ageGroup: "7-9",
      BirthYear: 2012,
      BirthMonth: "July",
      Birthdate: "5th",
      Gender: "Girl",
      WaitForSponsor: 134,
      FamilyIncome: 169,
      Country: "Niger",
    },
    {
      name: "Harira Sapuna",
      image: "./Child/girl3.jpg",
      age: 7,
      ageGroup: "7-9",
      BirthYear: 2012,
      BirthMonth: "October",
      Birthdate: "30th",
      Gender: "Girl",
      WaitForSponsor: 73,
      FamilyIncome: 120,
      Country: "Malawi",
    },
    {
      name: "Kabita Bhattarai",
      image: "./Child/girl2.jpg",
      age: 12,
      ageGroup: "10-14",
      BirthYear: 2008,
      BirthMonth: "May",
      Birthdate: "18th",
      Gender: "Girl",
      WaitForSponsor: 190,
      FamilyIncome: 201,
      Country: "Nepal",
    },
    {
      name: "Albert Lare",
      image: "./Child/boy5.jpeg",
      age: 6,
      ageGroup: "4-6",
      BirthYear: 2014,
      BirthMonth: "December",
      Birthdate: "25th",
      Gender: "Boy",
      WaitForSponsor: 5,
      FamilyIncome: 200,
      Country: "Togo",
    },
    {
      name: "Kyara Lopez",
      image: "./Child/girl4.jpg",
      age: 5,
      ageGroup: "4-6",
      BirthYear: 2015,
      BirthMonth: "March",
      Birthdate: "23th",
      Gender: "Girl",
      WaitForSponsor: 50,
      FamilyIncome: 134,
      Country: "Nicaragua",
    },
  ])

  const [sponsorKid, setSponsorKid] = React.useState()

  useEffect((name,image,age) => {
   setSponsorKid(name=kids.name,
    image=kids.image,
    age=kids.age
    )
  }, [kids])
 /* const testClick = (name, image, age) => {props.setSponsorKid(

    name=props.kids.name,
    image=props.kids.image,
    age=props.kids.age

 )}
*/

  return (
    <>
  
      <SponsorHeaderImage />
      <SponsorText />
      <SponsorCards kids={kids} setKids={setKids} sponsorKid={sponsorKid} setSponsorKid={setSponsorKid}  />
    </>
  );
};
export default Sponsormainpage;
