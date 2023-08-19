// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/interfaces/IERC4906.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

interface IChainWiseBadge is IERC721, IERC4906 {
 
    function safeMint(address to, string memory uri) external ;
    
    function burn(uint256 tokenId) external;

    function revoke(uint256 tokenId) external;

    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize) external;

    function _burn(uint256 tokenId) external ;

    function tokenURI(uint256 tokenId) external  view returns (string memory);
    
    function supportsInterface(bytes4 interfaceId) external  view  returns (bool);
}
