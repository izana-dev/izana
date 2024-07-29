import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const DeployIzanaNFT721: DeployFunction = async (
  hre: HardhatRuntimeEnvironment
) => {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("IzanaNFT721", {
    from: deployer,
    args: [],
    log: true,
    deterministicDeployment: false,
  });
};

DeployIzanaNFT721.tags = ["ERC721_COLLECTION"];
DeployIzanaNFT721.dependencies = ["REGISTRY"];

export default DeployIzanaNFT721;
