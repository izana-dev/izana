import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const DeployIzanaNFT1155: DeployFunction = async (
  hre: HardhatRuntimeEnvironment
) => {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("IzanaNFT1155", {
    from: deployer,
    args: [],
    log: true,
    deterministicDeployment: false,
  });
};

DeployIzanaNFT1155.tags = ["ERC1155_COLLECTION"];
DeployIzanaNFT1155.dependencies = ["REGISTRY"];

export default DeployIzanaNFT1155;
