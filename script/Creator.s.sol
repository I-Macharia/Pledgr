// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.30;

import {Script, console} from "forge-std/Script.sol";
import {CounterRegistry} from "../src/Creator.sol";

contract CounterRegistryScript is Script {
    CounterRegistry public registry;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        registry = new CounterRegistry();
        registry.registerCounter("ScriptCounter", "Deployed via script", 0);

        vm.stopBroadcast();
    }
}