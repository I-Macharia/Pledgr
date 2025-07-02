# CounterRegistry
[Git Source](https://github.com/Pledgr-DAO/contracts/blob/8844eaa0f9a7d0acae9a2ac79d4b52c426948e39/src/Creator.sol)


## State Variables
### counters

```solidity
mapping(address => Counter) public counters;
```


### isCounter

```solidity
mapping(address => bool) public isCounter;
```


### counterList

```solidity
address[] public counterList;
```


## Functions
### registerCounter


```solidity
function registerCounter(string memory _name, string memory _description, uint256 _initialValue) external;
```

### updateCounter


```solidity
function updateCounter(string memory _name, string memory _description) external;
```

### increment


```solidity
function increment() external;
```

### setValue


```solidity
function setValue(uint256 newValue) external;
```

### getValue


```solidity
function getValue(address owner) external view returns (uint256);
```

## Events
### CounterRegistered

```solidity
event CounterRegistered(address indexed owner, string name);
```

### CounterUpdated

```solidity
event CounterUpdated(address indexed owner);
```

## Structs
### Counter

```solidity
struct Counter {
    address owner;
    string name;
    string description;
    uint256 value;
    bool isActive;
    uint256 createdAt;
}
```

