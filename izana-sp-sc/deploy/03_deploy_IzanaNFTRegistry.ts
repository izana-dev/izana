import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployRegistry: DeployFunction = async (
  hre: HardhatRuntimeEnvironment
) => {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("IzanaNFTRegistry", {
    from: deployer,
    args: [],
    log: true,
    deterministicDeployment: false,
  });
};

deployRegistry.tags = ["REGISTRY"];

export default deployRegistry;
