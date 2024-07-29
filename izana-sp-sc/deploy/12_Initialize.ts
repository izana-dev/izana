import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const Initialize: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getNamedAccounts } = hre;
  const { execute } = deployments;
  const { deployer } = await getNamedAccounts();

  const exchangeAddress = (await deployments.get("IzanaNFTExchange")).address;
  const royaltyFeeSetter = (await deployments.get("RoyaltyFeeSetter")).address;

  await execute(
    "IzanaNFTRegistry",
    { from: deployer, log: true },
    "grantInitialAuthentication",
    exchangeAddress
  );

  await execute(
    "RoyaltyFeeRegistry",
    { from: deployer, log: true },
    "transferOwnership",
    royaltyFeeSetter
  );
};

Initialize.tags = ["INITIALIZE"];

export default Initialize;
