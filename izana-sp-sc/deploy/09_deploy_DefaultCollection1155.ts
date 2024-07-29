import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
const { SERVER_URL, NETWORK } = process.env;

const DeployIzanaNFTDefault: DeployFunction = async (
  hre: HardhatRuntimeEnvironment
) => {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const exchangeAddress = (await deployments.get("IzanaNFTExchange")).address;
  const proxyAddress = (await deployments.get("IzanaNFTRegistry")).address;
  const { deployer } = await getNamedAccounts();

  await deploy("DefaultIzanaNFT1155", {
    from: deployer,
    log: true,
    proxy: {
      owner: deployer,
      proxyContract: "OptimizedTransparentProxy",
      execute: {
        init: {
          methodName: "initialize",
          args: [
            "DefaultIzanaNFT1155",
            "DPAY",
            `${SERVER_URL}/default-1155-${NETWORK}/`,
            `${SERVER_URL}/default-1155-${NETWORK}/`,
            proxyAddress,
            exchangeAddress,
          ],
        },
      },
    },
  });
};

DeployIzanaNFTDefault.tags = ["DEFAULT_COLLECTION"];
DeployIzanaNFTDefault.dependencies = ["REGISTRY", "EXCHANGE"];

export default DeployIzanaNFTDefault;
