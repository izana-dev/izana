import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployTransferProxy: DeployFunction = async (
  hre: HardhatRuntimeEnvironment
) => {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const registryAddress = (await deployments.get("IzanaNFTRegistry")).address;

  await deploy("IzanaNFTTransferProxy", {
    from: deployer,
    args: [registryAddress],
    log: true,
    deterministicDeployment: false,
  });
};

deployTransferProxy.tags = ["TRANSFER_PROXY"];
deployTransferProxy.dependencies = ["REGISTRY"];

export default deployTransferProxy;
