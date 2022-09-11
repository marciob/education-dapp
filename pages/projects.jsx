import Image from "next/future/image";
import Head from "next/head";
import { useState, useEffect } from "react";

import { Card } from "../components/Card";
import { SimpleLayout } from "../components/SimpleLayout";
import logoAnimaginary from "../images/logos/animaginary.svg";
import logoCosmos from "../images/logos/cosmos.svg";
import logoHelioStream from "../images/logos/helio-stream.svg";
import logoOpenShuttle from "../images/logos/open-shuttle.svg";
import logoPlanetaria from "../images/logos/planetaria.svg";
import Link from "next/link";
import axios from "axios";
// import { useWallet } from '../context2/ConnectWalletContext'
import { useIdentityContext } from "../context/IdentityContextProvider";

const projects = [
  {
    name: "Planetaria",
    teacher: "Danilo Kim",
    description:
      "Creating technology to empower civilians to explore space on their own terms.",
  }

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

export default function Projects() {

  const [courses, setCourses] = useState(projects);
  const [courses2, setCourse2] = useState(projects);

  const fetchAnswers = async () => {
    // Construct query for subgraph
    const subgraphURL= "https://api.thegraph.com/subgraphs/name/danilowhk/totem-subgraph-polygon3"
    const postData = {
      query: `
      {
        courseAddeds(first: 100) {
          id
          name
          courseId
          courseOwner
          totalStaked
          stakedTokenAddress
        }
      
      }
      `,
    }
    // Fetch data
    try {
      const result = await axios.post(subgraphURL, postData)
 
      console.log("result.data",result.data.data)
      console.log("result.data.courseAddeds",result.data.data.courseAddeds)
      setCourse2(result.data.data.courseAddeds)
      // setAnswers(result.data.data.messageAddeds)
    } catch (err) {
      console.log('Error fetching subgraph data: ', err)
    }
  }

  const url = "https://ubo-dapp-api.herokuapp.com/api/courses/";

  useEffect(() => {
    // fetch(url).then((response) => {
    //     console.log('response', response)
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     setCourses(data);
    //   });
      fetchAnswers()
  }, []);

  const wallet = useIdentityContext();
  const [account, setAccount] = useState();

  const handleCheckWallet = () => {
    console.log("wallet", wallet);
    console.log("account", account);
  };

  return (
    <>
      <Head>
        <title>Totem - projetos</title>
        <meta
          name="description"
        />
      </Head>
      <SimpleLayout
        title="Cursos ativos"
        intro="Abaixo você verá a lista dos Cursos em andamento!"
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {courses2.map((project) => (
            // <Link href={`/`} passHref={true} key={project.name}>
            <Link href={`/desafios/${project.courseId}`} key={project.name}>
            <div className="bg-gray-300 cursor-pointer p-2 rounded-xl py-5" >
              <Card as="li">
                <div className="relative z-10 flex h-12 w-12 block items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <Image
                      src={logoPlanetaria}
                      alt=""
                      className="h-8 w-8"
                      unoptimized
                    />
                </div>
                <h2 className="mt-6 flex flex-col items-center justify-center text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  <span>{project.name} </span>
                  <span> Id: {project.courseId}</span>

                </h2>
                <Card.Description>{project.description}</Card.Description>
                <p className="relative z-10 mt-3 flex flex-col text-sm font-medium text-zinc-800 transition group-hover:text-teal-500 dark:text-zinc-200 text-center">
                  <span>Total Staked</span>
                  <span className="ml-2 truncate overflow-hidden">{project.totalStaked}</span>
                </p>
                <p className="relative z-10 mt-3 flex flex-col text-sm font-medium text-zinc-800 transition group-hover:text-teal-500 dark:text-zinc-200 text-center">
                  <span>Instrutor</span>
                  <span className="ml-2 truncate overflow-hidden">{project.courseOwner}</span>
                </p>
              </Card>
            </div>
           </Link>
          ))}
        </ul>
      </SimpleLayout>
      {/* <button onClick={handleCheckWallet}>Check Wallet</button> */}
    </>
  );
}
