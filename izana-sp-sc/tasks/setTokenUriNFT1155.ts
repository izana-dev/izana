import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

task("task:setTokenUriNFT1155")
  .addParam("uri", "new contract uri")
  .setAction(async function (
    taskArguments: TaskArguments,
    { ethers, deployments, getNamedAccounts }
  ) {
    const { deployer } = await getNamedAccounts();
    const signer = await ethers.getSigner(deployer);

    const deployment = await deployments.get("DefaultIzanaNFT1155");
    const contract = await ethers.getContractAt(
      "DefaultIzanaNFT1155",
      deployment.address
    );

    const tx = await contract
      .connect(signer)
      .modifyContractURI(taskArguments.uri);
    const receipt = await tx.wait();
    console.log(
      `DefaultIzanaNFT1155.modifyContractURI(${taskArguments.uri}) (tx: ${receipt.transactionHash})`
    );
  });
