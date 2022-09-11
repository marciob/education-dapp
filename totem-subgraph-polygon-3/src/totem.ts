import {
  ChallengeAdded as ChallengeAddedEvent,
  Claimed as ClaimedEvent,
  CourseAdded as CourseAddedEvent,
  StudentAdded as StudentAddedEvent,
  SubmittedChallenge as SubmittedChallengeEvent,
  ValidatedSubmit as ValidatedSubmitEvent
} from "../generated/Totem/Totem"
import {
  ChallengeAdded,
  Claimed,
  CourseAdded,
  StudentAdded,
  SubmittedChallenge,
  ValidatedSubmit
} from "../generated/schema"

export function handleChallengeAdded(event: ChallengeAddedEvent): void {
  let entity = new ChallengeAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.challengeId = event.params.challengeId
  entity.courseId = event.params.courseId
  entity.challengeReward = event.params.challengeReward
  entity.name = event.params.name
  entity.question = event.params.question
  entity.uri = event.params.uri
  entity.save()
}

export function handleClaimed(event: ClaimedEvent): void {
  let entity = new Claimed(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.challengeId = event.params.challengeId
  entity.courseId = event.params.courseId
  entity.studentAddress = event.params.studentAddress
  entity.reward = event.params.reward
  entity.save()
}

export function handleCourseAdded(event: CourseAddedEvent): void {
  let entity = new CourseAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.name = event.params.name
  entity.courseOwner = event.params.courseOwner
  entity.totalStaked = event.params.totalStaked
  entity.stakedTokenAddress = event.params.stakedTokenAddress
  entity.courseId = event.params.courseId
  entity.save()
}

export function handleStudentAdded(event: StudentAddedEvent): void {
  let entity = new StudentAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.courseId = event.params.courseId
  entity.studentAddress = event.params.studentAddress
  entity.save()
}

export function handleSubmittedChallenge(event: SubmittedChallengeEvent): void {
  let entity = new SubmittedChallenge(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.courseId = event.params.courseId
  entity.challengeId = event.params.challengeId
  entity.answer = event.params.answer
  entity.studentAddress = event.params.studentAddress
  entity.save()
}

export function handleValidatedSubmit(event: ValidatedSubmitEvent): void {
  let entity = new ValidatedSubmit(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.challengeId = event.params.challengeId
  entity.courseId = event.params.courseId
  entity.score = event.params.score
  entity.rewardAmount = event.params.rewardAmount
  entity.studentAddress = event.params.studentAddress
  entity.save()
}
