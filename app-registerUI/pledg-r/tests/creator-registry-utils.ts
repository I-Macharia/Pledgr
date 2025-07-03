import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  CreatorRegistered,
  CreatorUpdated
} from "../generated/CreatorRegistry/CreatorRegistry"

export function createCreatorRegisteredEvent(
  creator: Address,
  name: string
): CreatorRegistered {
  let creatorRegisteredEvent = changetype<CreatorRegistered>(newMockEvent())

  creatorRegisteredEvent.parameters = new Array()

  creatorRegisteredEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  creatorRegisteredEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )

  return creatorRegisteredEvent
}

export function createCreatorUpdatedEvent(creator: Address): CreatorUpdated {
  let creatorUpdatedEvent = changetype<CreatorUpdated>(newMockEvent())

  creatorUpdatedEvent.parameters = new Array()

  creatorUpdatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )

  return creatorUpdatedEvent
}
