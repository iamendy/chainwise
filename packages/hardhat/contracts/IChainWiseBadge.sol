// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

interface IChainWiseBadge {
    function safeMint(address to) external;

    function burn(uint256 tokenId) external;

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) external;

    function _burn(uint256 tokenId) external;

    function supportsInterface(bytes4 interfaceId) external view returns (bool);
}