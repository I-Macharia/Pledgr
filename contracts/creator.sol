// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;
import "@openzeppelin/contracts/access/Ownable.sol";


contract CreatorRegistry  {
struct Creator {
address creator;
string name;
string bio;
string avatar;
// string[] contentLinks;
bool isActive;
uint256 totalStaked;
uint256 fanCount;
uint256 createdAt;
}
mapping(address => Creator) public creators;
mapping(address => bool) public isCreator;
address[] public creatorList;
event CreatorRegistered(address indexed creator, string name);
event CreatorUpdated(address indexed creator);
function registerCreator(
string memory _name,
string memory _bio,
string memory _avatar
) external {
require(!isCreator[msg.sender], "Already registered");
require(bytes(_name).length > 0, "Name required");
Creator storage newCreator = creators[msg.sender];
newCreator.creator = msg.sender;
newCreator.name = _name;
newCreator.bio = _bio;
newCreator.avatar = _avatar;
newCreator.isActive = true;
newCreator.createdAt = block.timestamp;
isCreator[msg.sender] = true; creatorList.push(msg.sender);

emit CreatorRegistered(msg.sender, _name);
}
function updateProfile(
string memory _name,
string memory _bio,
string memory _avatar
// string[] memory _contentLinks
) external {
require(isCreator[msg.sender], "Not a creator");
Creator storage creator = creators[msg.sender];
creator.name = _name;
creator.bio = _bio;
creator.avatar = _avatar;
// creator.contentLinks = _contentLinks;
emit CreatorUpdated(msg.sender);
}
}