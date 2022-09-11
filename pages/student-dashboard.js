/* This example requires Tailwind CSS v2.0+ */
// import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { useEffect } from "react"
import { CardResposta } from "../components/CardRespostas"
import axios from "axios"


export default function Validate() {

  const fetchAnswers = async () => {
    // Construct query for subgraph
    const subgraphURL= "https://api.thegraph.com/subgraphs/name/danilowhk/totem-subgraph-polygon2"
    const postData = {
      query: `
      {
      validatedSubmits(first: 100) {
        id
        challengeId
        courseId
        score
        studentAddress
        rewardAmount
        }
      }
      `,
    }
    // Fetch data
    try {
      const result = await axios.post(subgraphURL, postData)
      // setQuestion(result.data.data.parentMessageAddeds[0])
      // setAnswers(result.data.data.messageAddeds)
      console.log("result",result)
      console.log("result.data",result.data.data)
      // setAnswers(result.data.data.messageAddeds)
    } catch (err) {
      console.log('Error fetching subgraph data: ', err)
    }
  }

  useEffect(() => {
    const doAsync = async () => {
      await fetchAnswers()
    }
    doAsync()
  }, [])

  return (
    <div className="flex items-center justify-center">
        <div className='p-10 grid grid-cols-3 items-center'>
            <CardResposta />
            <CardResposta />
            <CardResposta />
            <CardResposta />
            <CardResposta />
            <CardResposta />

        </div>
    </div>
    
  )
}
