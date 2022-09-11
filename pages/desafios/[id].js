import Image from "next/future/image";
import Head from "next/head";
import { useState, useEffect } from "react";
import axios from "axios";

import logoPlanetaria from "../../images/logos/planetaria.svg";
import Link from "next/link";
import { CardDesafio } from "../../components/CardDesafio";
import { useRouter } from "next/router";

const lessonsInitial = [
  {
    name: "Planetaria",
    description:
      "Creating technology to empower civilians to explore space on their own terms.",
    link: { href: "http://planetaria.tech", label: "planetaria.tech" },
    logo: logoPlanetaria,
  },
];

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Desafios() {
  const [lessons, setLessons] = useState(lessonsInitial);
  const [challenges,setChallenges] = useState([]);
  const router = useRouter();
  const { id } = router.query



  // hardcoded course id
  let course_id = id;

  const url = `https://ubo-dapp-api.herokuapp.com/api/courses/${course_id}/lessons`;


  useEffect(() => {
    // fetch(url)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     setLessons(data);
    //   });
    console.log("id", id)
    fetchAnswers()
  }, []);

  const fetchAnswers = async () => {
    // Construct query for subgraph
    const subgraphURL= "https://api.thegraph.com/subgraphs/name/danilowhk/totem-subgraph-polygon2"
    console.log("Fetch Called!")
    const postData = {
      query: `
      {
        challengeAddeds(
          first: 100
          where: {courseId: ${id}}
          ) {
          id
          challengeId
          challengeReward
        }
      
      }
      `,
    }
    // Fetch data
    try {
      const result = await axios.post(subgraphURL, postData)
      console.log("result", result)
      console.log("result.data",result.data.data)
      console.log("result.data.challengeAddeds",result.data.data.challengeAddeds)
      setChallenges(result.data.data.challengeAddeds)
    } catch (err) {
      console.log('Error fetching subgraph data: ', err)
    }
  }

  return (
    <>
      <div className="flex items-center justify-center">
      {/* <h1 className="text-center text-2xl font-bold mt-10">{challenges.length >1 ? "Veja os Desafios que você pode Clamar/Claim": "Este curso não tem nenhum desafio disponível"} </h1> */}

        <div className="p-10 grid grid-cols-3 items-center">

        
        {challenges.map((lesson) => (
          <div className="cursor-pointer" key={lesson.id}>
            <CardDesafio lesson={lesson} courseId={id}/>
          </div>
        ))}
        </div>
        
      </div>
    </>
  );

}
