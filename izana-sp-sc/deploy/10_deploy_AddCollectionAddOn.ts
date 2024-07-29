import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const AddCollectionAddOn: DeployFunction = async (
  hre: HardhatRuntimeEnvironment
) => {
  const { deployments, getNamedAccounts } = hre;
  const { deploy, execute } = deployments;
  const { deployer } = await getNamedAccounts();
  const defaultIzanaNFT721Address = (
    await deployments.get("DefaultIzanaNFT721")
  ).address;
  const defaultIzanaNFT1155Address = (
    await deployments.get("DefaultIzanaNFT1155")
  ).address;

  await deploy("AddCollectionAddOn", {
    from: deployer,
    args: [],
    log: true,
    deterministicDeployment: false,
  });

  await execute(
    "AddCollectionAddOn",
    { from: deployer, log: true },
    "addCollection",
    defaultIzanaNFT721Address
  );
  await execute(
    "AddCollectionAddOn",
    { from: deployer, log: true },
    "addCollection",
    defaultIzanaNFT1155Address
  );
};

AddCollectionAddOn.tags = ["ADD_COLLECTION"];
AddCollectionAddOn.dependencies = ["DEFAULT_COLLECTION"];

export default AddCollectionAddOn;
