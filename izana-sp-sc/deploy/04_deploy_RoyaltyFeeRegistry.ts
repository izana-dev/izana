import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployRoyalty: DeployFunction = async (
  hre: HardhatRuntimeEnvironment
) => {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("RoyaltyFeeRegistry", {
    from: deployer,
    args: [3000],
    log: true,
    deterministicDeployment: false,
  });
};

deployRoyalty.tags = ["ROYALTY"];

export default deployRoyalty;
