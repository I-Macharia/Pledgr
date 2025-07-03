import {
  CreatorRegistered as CreatorRegisteredEvent,
  CreatorUpdated as CreatorUpdatedEvent
} from "../generated/CreatorRegistry/CreatorRegistry"
import { CreatorRegistered, CreatorUpdated } from "../generated/schema"

export function handleCreatorRegistered(event: CreatorRegisteredEvent): void {
  let entity = new CreatorRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.creator = event.params.creator
  entity.name = event.params.name

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCreatorUpdated(event: CreatorUpdatedEvent): void {
  let entity = new CreatorUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.creator = event.params.creator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
