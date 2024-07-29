import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const deployFactory: DeployFunction = async (
  hre: HardhatRuntimeEnvironment
) => {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const registryAddress = (await deployments.get('IzanaNFTRegistry')).address;
  const IzanaNFTStore = (await deployments.get('IzanaNFT721')).address;
  const MadworldStoreMultipleSupplyAddress = (
    await deployments.get('IzanaNFT1155')
  ).address;
  const IzanaNFTExchange = (await deployments.get('IzanaNFTExchange'))
    .address;
  await deploy('IzanaNFTFactory', {
    from: deployer,
    args: [
      MadworldStoreMultipleSupplyAddress,
      IzanaNFTStore,
      registryAddress,
      IzanaNFTExchange,
    ],
    log: true,
    deterministicDeployment: false,
  });
};

deployFactory.dependencies = [
  'REGISTRY',
  'ERC721_COLLECTION',
  'ERC1155_COLLECTION',
  'EXCHANGE',
];
deployFactory.tags = ['FACTORY'];

export default deployFactory;
