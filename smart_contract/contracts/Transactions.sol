// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Transactions {
   
    uint TransferCount;

    struct TransferDetails {
        address sender;
        address reciever;
        uint256 amount;
        uint timeStamp;
        string message;
        string keyword;
        uint blocknumber;
    }

    TransferDetails[] transactions;


    event Transfer(address sendFrom, address sendTo, uint256 amount, uint timeStamp, string message, string keyword);

    function addBlock(address payable reciever, uint256 amount, string memory message, string memory keyword) public {
        TransferCount += 1;
        transactions.push(TransferDetails(msg.sender, reciever, amount, block.timestamp, message, keyword, block.number));

        emit Transfer(msg.sender, reciever, amount, block.timestamp, message, keyword);
    }

    function getTransactionsHistory() public view returns (TransferDetails[] memory) {
        return transactions;
    }

    function transactionCount() public view returns (uint) {
        return TransferCount;
    }
}