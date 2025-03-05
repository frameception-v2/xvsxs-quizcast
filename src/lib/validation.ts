/**
 * Validates Ethereum wallet address format
 * @param address Wallet address to validate
 * @returns boolean indicating if address is valid
 */
export function isValidEthereumAddress(address: string): boolean {
  // Basic Ethereum address validation
  const ethAddressRegex = /^0x[a-fA-F0-9]{40}$/;
  
  // Check basic format first
  if (!ethAddressRegex.test(address)) {
    return false;
  }

  // TODO: Add EIP-55 checksum validation when we have more UI feedback
  return true;
}
