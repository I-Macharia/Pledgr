// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

contract CounterRegistry {
    struct Counter {
        address owner;
        string name;
        string description;
        uint256 value;
        bool isActive;
        uint256 createdAt;
    }

    mapping(address => Counter) public counters;
    mapping(address => bool) public isCounter;
    address[] public counterList;

    event CounterRegistered(address indexed owner, string name);
    event CounterUpdated(address indexed owner);

    function registerCounter(
        string memory _name,
        string memory _description,
        uint256 _initialValue
    ) external {
        require(!isCounter[msg.sender], "Already registered");
        require(bytes(_name).length > 0, "Name required");
        Counter storage newCounter = counters[msg.sender];
        newCounter.owner = msg.sender;
        newCounter.name = _name;
        newCounter.description = _description;
        newCounter.value = _initialValue;
        newCounter.isActive = true;
        newCounter.createdAt = block.timestamp;
        isCounter[msg.sender] = true;
        counterList.push(msg.sender);

        emit CounterRegistered(msg.sender, _name);
    }

    function updateCounter(
        string memory _name,
        string memory _description
    ) external {
        require(isCounter[msg.sender], "Not registered");
        Counter storage counter = counters[msg.sender];
        counter.name = _name;
        counter.description = _description;
        emit CounterUpdated(msg.sender);
    }

    function increment() external {
        require(isCounter[msg.sender], "Not registered");
        counters[msg.sender].value++;
    }

    function setValue(uint256 newValue) external {
        require(isCounter[msg.sender], "Not registered");
        counters[msg.sender].value = newValue;
    }

    function getValue(address owner) external view returns (uint256) {
        return counters[owner].value;
    }
}