// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../contracts/creator.sol";

contract DeployCreatorRegistry is Script {
    function run() external {
        vm.startBroadcast();
        new CreatorRegistry();
        vm.stopBroadcast();
    }
}

