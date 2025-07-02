// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.30;

import {Test, console} from "forge-std/Test.sol";
import {CounterRegistry} from "../src/Creator.sol";

contract CounterRegistryTest is Test {
    CounterRegistry public registry;

    function setUp() public {
        registry = new CounterRegistry();
        registry.registerCounter("TestCounter", "A test counter", 0);
    }

    function test_Increment() public {
        registry.increment();
        uint256 value = registry.getValue(address(this));
        assertEq(value, 1);
    }

    function test_SetValue() public {
        registry.setValue(42);
        uint256 value = registry.getValue(address(this));
        assertEq(value, 42);
    }

    function test_UpdateCounter() public {
        registry.updateCounter("UpdatedName", "Updated description");
        // No revert means success; you can add more checks if you expose getters for name/description
    }

    function testFuzz_SetValue(uint256 x) public {
        registry.setValue(x);
        assertEq(registry.getValue(address(this)), x);
    }
}