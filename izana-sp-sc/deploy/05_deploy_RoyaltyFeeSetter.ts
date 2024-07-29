import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployRoyaltySetter: DeployFunction = async (
  hre: HardhatRuntimeEnvironment
) => {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const royaltyFeeRegistry = (await deployments.get("RoyaltyFeeRegistry"))
    .address;

  await deploy("RoyaltyFeeSetter", {
    from: deployer,
    args: [royaltyFeeRegistry],
    log: true,
    deterministicDeployment: false,
  });
};

deployRoyaltySetter.dependencies = ["ROYALTY"];
deployRoyaltySetter.tags = ["ROYALTY_SETTER"];

export default deployRoyaltySetter;
