import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployExchange: DeployFunction = async (
  hre: HardhatRuntimeEnvironment
) => {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const registryAddress = (await deployments.get("IzanaNFTRegistry")).address;
  const transferProxy = (await deployments.get("IzanaNFTTransferProxy"))
    .address;
  const royaltyFeeRegistry = (await deployments.get("RoyaltyFeeRegistry"))
    .address;

  await deploy("IzanaNFTExchange", {
    from: deployer,
    args: [registryAddress, transferProxy, royaltyFeeRegistry],
    log: true,
    deterministicDeployment: false,
  });
};

deployExchange.dependencies = ["REGISTRY", "PACE", "TRANSFER_PROXY", "ROYALTY"];
deployExchange.tags = ["EXCHANGE"];

export default deployExchange;
