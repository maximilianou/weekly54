// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;

contract Token {
    string public name = "Sample Hardhat Token";
    string public symbol = "SHT";
    uint256 public totalSupply = 1000000;
    address public owner;
    mapping(address => uint256) balances;

    constructor() {
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    function transfer(address to, uint256 amount) external {
        require(
            balances[msg.sender] >= amount,
            "Must have enough Tokens, sorry!"
        );
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }

    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }
}
