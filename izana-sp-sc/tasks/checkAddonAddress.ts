import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

task("task:checkAddonAddress")
  .addParam("address")
  .setAction(async function (
    taskArguments: TaskArguments,
    { ethers, deployments, getNamedAccounts }
  ) {
    const { deployer } = await getNamedAccounts();
    const signer = await ethers.getSigner(deployer);

    const deployment = await deployments.get("AddCollectionAddOn");
    const contract = await ethers.getContractAt(
      "AddCollectionAddOn",
      deployment.address
    );

    const isAdded = await contract
      .connect(signer)
      .isAddedCollection(taskArguments.address);
    console.log(
      `Address ${taskArguments.address} isAddedCollection: ${isAdded}`
    );
  });
